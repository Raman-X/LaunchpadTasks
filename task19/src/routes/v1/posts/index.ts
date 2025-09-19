import express from "express";
import postsController from "./controller";
const router = express.Router();

router.post("/", postsController.create);
router.get("/", postsController.getAll);
router.get("/:postId", postsController.getById);
router.patch("/:postId", postsController.update);
router.delete("/:postId", postsController.delete);

export default router;
