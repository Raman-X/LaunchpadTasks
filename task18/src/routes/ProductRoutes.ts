import express from "express";
import {
  createProduct,
  deleteProduct, // PATCH review
  deleteProductReview,
  reviewProduct, // POST review
  searchProducts,
  updateProduct,
  updateProductReview, // PATCH review
} from "../controllers/productController";

const router = express.Router();

// Product routes
router.post("/", createProduct);
router.get("/search", searchProducts);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

// Reviews (create/update/delete)
router.post("/:id/review", reviewProduct); // Add a review (existing)
router.patch("/:productId/reviews/:reviewId", updateProductReview); // Task 18
router.delete("/:productId/reviews/:reviewId", deleteProductReview); // Task 19

export default router;
