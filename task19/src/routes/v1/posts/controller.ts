import { Request, Response } from "express";
import PostService from "./service";

const postsController = {
  create(req: Request, res: Response) {
    try {
      const result = PostService.create(req.body);
      res.status(201).json({ message: "Post created successfully", result });
    } catch (error: any) {
      res.status(500).json({ error: "internal server error" });
    }
  },
  getAll(req: Request, res: Response) {
    try {
      const result = PostService.getAll();
      res.status(200).json({ message: "posts fetched successfully", result });
    } catch (error: any) {
      res.status(500).json({ error: "internal server error" });
    }
  },
  getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.postId);

      const result = PostService.getById(id);
      res.status(200).json({ message: "post fetched successfully", result });
    } catch (error: any) {
      res.status(500).json({ error: "internal server error" });
    }
  },
  update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.postId);
      const body = req.body;
      const result = PostService.updateById(id, body);
      res.status(200).json({ message: "post updated successfully", result });
    } catch (error: any) {
      res.status(500).json({ error: "internal server error" });
    }
  },
  delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.postId);
      const result = PostService.deleteById(id);
      res.status(200).json({ message: "post deleted successfully", result });
    } catch (error: any) {
      res.status(500).json({ error: "internal server error" });
    }
  },
};

export default postsController;
