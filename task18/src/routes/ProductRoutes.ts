import express from "express";
import {
  createProduct,
  deleteProduct,
  reviewProduct,
  searchProducts,
  updateProduct,
} from "../controllers/productController";

const router = express.Router();

router.post("/", createProduct);
router.get("/search", searchProducts);
router.post("/:id/review", reviewProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

router.get("/", (req, res) => {
  res.send("Hello World! from api/products");
});

export default router;
