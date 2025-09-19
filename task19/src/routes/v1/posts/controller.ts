import { Request, Response } from "express";
import PostService from "./service";

const postsController = {
  async create(req: Request, res: Response) {
    try {
      const result = await PostService.create(req.body);
      res.status(201).json({ message: "Post created successfully", result });
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Internal server error" });
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const result = await PostService.getAll();
      res.status(200).json({ message: "Posts fetched successfully", result });
    } catch (error: any) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = req.params.postId;
      const result = await PostService.getById(id);
      res.status(200).json({ message: "Post fetched successfully", result });
    } catch (error: any) {
      res.status(404).json({ error: error.message || "Post not found" });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = req.params.postId;
      const body = req.body;
      const result = await PostService.updateById(id, body);
      res.status(200).json({ message: "Post updated successfully", result });
    } catch (error: any) {
      res.status(404).json({ error: error.message || "Post not found" });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.postId;
      const result = await PostService.deleteById(id);
      res.status(200).json({ message: "Post deleted successfully", result });
    } catch (error: any) {
      res.status(404).json({ error: error.message || "Post not found" });
    }
  },
};

export default postsController;
