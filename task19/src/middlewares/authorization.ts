import { NextFunction, Request, Response } from "express";

type Roles = ("admin" | "blogger")[];

export const authorizationMiddleware = (...roles: Roles) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    console.log(user.role, "user role");
    console.log(roles);

    if (!roles.includes(user.role)) {
      return res.status(403).json({ message: "Not Authorized" });
    }

    next();
  };
};
