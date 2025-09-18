import express from "express";
import postsController from "./controller";
const router = express.Router();

router.post("/", postsController.createPost);
router.get("/", postsController.getAllPosts);
router.get("/:postId", postsController.getPostById);
router.patch("/:postId", postsController.updatePost);
router.delete("/:postId", postsController.deletePost);

export default router;
