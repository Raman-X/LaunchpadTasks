import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../config/env";
import User from "../models/user";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1]; // Expecting "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const payload: any = jwt.verify(token, SECRET_TOKEN);

    const user = await User.findById(payload.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    (req as any).user = {
      userId: user._id.toString(),
      role: user.role,
    };

    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
