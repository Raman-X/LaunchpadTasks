import { Request, Response } from "express";

const registerController = {
  register(req: Request, res: Response) {
    try {
      const { email, firstName, lastName, password, confirmPassword } =
        req.body;

      //encrypt password

      //validate payload with zod or yup

      //validate if user with email already exists

      //create user

      //send proper success message
    } catch (error: any) {
      res.status(500).json({ message: "internal server error" });
    }
  },
};
