import { Request, Response } from "express";
import User, { IUser } from "../models/UserSchema";

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, age, country } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create user
    const user: IUser = new User({
      username,
      email,
      age,
      country,
      last_login: new Date(),
    });

    const savedUser = await user.save();

    return res.status(201).json(savedUser);
  } catch (error: any) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// search users
export const searchUsers = async (req: Request, res: Response) => {
  try {
    const {
      country,
      interest,
      profileTheme,
      subscriptionTier,
      page = "1",
      limit = "10",
    } = req.query;

    const filters: any = {};

    // Apply filters
    if (country) filters.country = country;
    if (profileTheme) filters.theme = profileTheme;
    if (subscriptionTier) filters.tier = subscriptionTier;
    if (interest) filters.interests = { $in: [interest] };

    // Pagination
    const pageNumber = Number(page);
    const pageSize = Number(limit);
    const skip = (pageNumber - 1) * pageSize;

    // Fetch filtered users
    const users = await User.find(filters).skip(skip).limit(pageSize);

    // Total count
    const total = await User.countDocuments(filters);

    return res.status(200).json({
      page: pageNumber,
      limit: pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
      data: users,
    });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const user = User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { profileTheme, subscriptionTier, age, country } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (profileTheme) user.theme = profileTheme;
    if (subscriptionTier) user.tier = subscriptionTier;
    if (age) user.age = age;
    if (country) user.country = country;
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
