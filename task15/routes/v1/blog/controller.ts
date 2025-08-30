import { Request, Response } from "express";
import PostService from "./service";
import { IPostPayload } from "./types";

const PostController = {
  getAll(req: Request, res: Response) {
    try {
      const posts = PostService.getAll();
      res.status(200).json({ message: "All posts fetched", data: posts });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  },

  getById(req: Request<{ id: string }>, res: Response) {
    try {
      const post = PostService.getById(parseInt(req.params.id));
      res.status(200).json({ message: "Post fetched", data: post });
    } catch (err: any) {
      res.status(404).json({ message: err.message });
    }
  },

  create(req: Request<null, null, IPostPayload>, res: Response) {
    try {
      const post = PostService.create(req.body);
      res.status(201).json({ message: "Post created", data: post });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  update(
    req: Request<{ id: string }, null, Partial<IPostPayload>>,
    res: Response
  ) {
    try {
      const updatedPost = PostService.updateById(
        parseInt(req.params.id),
        req.body
      );
      res.status(200).json({ message: "Post updated", data: updatedPost });
    } catch (err: any) {
      res.status(404).json({ message: err.message });
    }
  },

  delete(req: Request<{ id: string }>, res: Response) {
    try {
      PostService.deleteById(parseInt(req.params.id));
      res.status(200).json({ message: "Post deleted" });
    } catch (err: any) {
      res.status(404).json({ message: err.message });
    }
  },

  getByAuthor(req: Request<{ authorId: string }>, res: Response) {
    try {
      const posts = PostService.getByAuthor(parseInt(req.params.authorId));
      res.status(200).json({ message: "Posts by author", data: posts });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  },
};

export default PostController;
