import express from "express";
import registerController from "./controller";

const router = express.Router();

router.post("/", registerController.register);

export default router;
