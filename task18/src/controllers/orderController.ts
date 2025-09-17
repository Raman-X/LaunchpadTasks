import { Request, Response } from "express";
import Order from "../models/OrderSchema";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { customer_id, items } = req.body;

    // Basic validation
    if (!customer_id || !items || !Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ message: "customer_id and items are required." });
    }

    // Validate product prices (optional: if you want prices from DB)
    let total_amount = 0;

    for (const item of items) {
      const { product_id, quantity, unit_price } = item;

      if (!product_id || !quantity || !unit_price) {
        return res.status(400).json({
          message: "Each item must have product_id, quantity, and unit_price.",
        });
      }

      total_amount += quantity * unit_price;
    }

    const newOrder = new Order({
      customer_id,
      items,
      total_amount,
    });

    const savedOrder = await newOrder.save();

    return res.status(201).json({
      message: "Order created successfully",
      order: savedOrder,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { status } = req.query;

    const filter = status ? { status } : {};
    const orders = await Order.find(filter)
      .populate("customer_id")
      .populate("items.product_id");

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: "Server error while retrieving orders" });
  }
};

export const getOrdersByCustomer = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params;

    const orders = await Order.find({ customer_id: customerId }).populate(
      "items.product_id"
    );

    res.status(200).json(orders);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Server error while retrieving customer orders" });
  }
};

import Product from "../models/ProductSchema"; // Assuming you have a Product model

// PATCH /orders/:orderId/status
export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!["cancelled", "completed"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    if (order.status === "cancelled" || order.status === "completed") {
      return res.status(400).json({ error: "Order is already finalized" });
    }

    order.status = status;
    await order.save();

    // If cancelled, restock the items
    if (status === "cancelled") {
      for (const item of order.items) {
        await Product.findByIdAndUpdate(
          item.product_id,
          { $inc: { stock: item.quantity } }, // Assuming your Product model has a `stock` field
          { new: true }
        );
      }
    }

    res.status(200).json({ message: `Order marked as ${status}`, order });
  } catch (err) {
    res.status(500).json({ error: "Server error while updating order status" });
  }
};
