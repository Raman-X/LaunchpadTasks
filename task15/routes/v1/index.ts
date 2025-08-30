import { Router } from "express";
import BlogRouter from "./blog";

const router = Router();

router.use("/todos", BlogRouter);

export default router;
