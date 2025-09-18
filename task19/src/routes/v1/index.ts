import express from "express";

import authRoutes from "./auth";
import postsRoutes from "./posts";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/posts", postsRoutes);

export default router;
