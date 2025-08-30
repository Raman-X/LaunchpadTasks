import { Router } from "express";
import PostController from "./controller";

const router = Router();

router.get("/", PostController.getAll);
router.get("/:id", PostController.getById);
router.post("/", PostController.create);
router.patch("/:id", PostController.update);
router.delete("/:id", PostController.delete);
router.get("/author/:authorId", PostController.getByAuthor);

export default router;
