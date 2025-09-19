import express from "express";
import { authMiddleware } from "../../../middlewares/authentication";
import { authorizationMiddleware } from "../../../middlewares/authorization";
import postsController from "./controller";

const router = express.Router();

router.use(authMiddleware);

router.post(
  "/",
  authorizationMiddleware("admin", "blogger"),
  postsController.create
);

router.get("/", postsController.getAll);

router.get("/:postId", postsController.getById);

router.patch(
  "/:postId",
  authorizationMiddleware("admin"),
  postsController.update
);

router.delete(
  "/:postId",
  authorizationMiddleware("admin"),
  postsController.delete
);

export default router;
