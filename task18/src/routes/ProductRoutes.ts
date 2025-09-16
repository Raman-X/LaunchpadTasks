import express from "express";
import { createProduct } from "../controllers/productController";

const router = express.Router();

router.post("/", createProduct);
router.get("/search", searchProducts);

router.get("/", (req, res) => {
  res.send("Hello World! from api/products");
});

export default router;
