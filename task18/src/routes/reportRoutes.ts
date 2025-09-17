import express from "express";
import {
  getMonthlySales,
  getSalesRevenue,
  getTopSellingProducts,
} from "../controllers/reportController"; // Assuming separate controller

const router = express.Router();

router.get("/sales-revenue", getSalesRevenue);
router.get("/top-products", getTopSellingProducts);
router.get("/monthly-sales", getMonthlySales);

export default router;
