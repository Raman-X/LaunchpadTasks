import express from "express";
import registerController from "./controller";

const router = express.Router();

router.use("/", registerController.register);

export default router;
