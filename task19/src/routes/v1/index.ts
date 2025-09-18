import express from "express";

import authRoutes from "./auth/index";

const router = express.Router();

router.use("/auth", authRoutes);

export default router;
