import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as z from "zod";
import { SECRET_TOKEN } from "../../../../config/env";
import User from "../../../../models/user";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const loginController = {
  async login(req: Request, res: Response) {
    try {
      // Validate input
      const result = loginSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          message: "Validation failed",
          errors: z.treeifyError(result.error),
        });
      }

      const { email, password } = result.data;

      // Find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Generate JWT
      const token = jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        SECRET_TOKEN,
        { expiresIn: "1d" }
      );

      // Success
      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
      });
    } catch (error: any) {
      console.error("Login Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default loginController;
