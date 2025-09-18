import { Request, Response } from "express";

const postsController = {
  createPost(req: Request, res: Response) {
    try {
    } catch (error: any) {
      res.status(500).json({ error: "internal server error" });
    }
  },
  getAllPosts(req: Request, res: Response) {
    try {
    } catch (error: any) {
      res.status(500).json({ error: "internal server error" });
    }
  },
  getPostById(req: Request, res: Response) {
    try {
    } catch (error: any) {
      res.status(500).json({ error: "internal server error" });
    }
  },
  updatePost(req: Request, res: Response) {
    try {
    } catch (error: any) {
      res.status(500).json({ error: "internal server error" });
    }
  },
  deletePost(req: Request, res: Response) {
    try {
    } catch (error: any) {
      res.status(500).json({ error: "internal server error" });
    }
  },
};

export default postsController;
