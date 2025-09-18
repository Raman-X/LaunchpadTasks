import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User from "../../../../models/user";

import * as z from "zod";

const registerSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Confirm password is required"),
});

const registerController = {
  async register(req: Request, res: Response) {
    try {
      const result = registerSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json(result.error);
      }

      const { email, firstName, lastName, password, confirmPassword } =
        result.data;

      // Check if passwords match
      if (password !== confirmPassword) {
        return res
          .status(400)
          .json({ message: "Password does not match confirmPassword" });
      }

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "Email already exists" });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      const newUser = await User.create({
        email,
        firstName,
        lastName,
        password: hashedPassword,
      });

      res.status(201).json({ message: "User created successfully", newUser });
    } catch (error: any) {
      console.error("Register Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default registerController;
