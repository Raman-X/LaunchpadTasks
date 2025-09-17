import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrdersByCustomer,
  updateOrderStatus,
} from "../controllers/orderController";

const router = express.Router();

router.post("/", createOrder);
router.get("/orders", getAllOrders);

router.get("/customers/:customerId/orders", getOrdersByCustomer);

router.patch("/orders/:orderId/status", updateOrderStatus);

export default router;
