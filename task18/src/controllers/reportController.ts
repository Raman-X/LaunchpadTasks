import { Request, Response } from "express";
import Order from "../models/OrderSchema";

export const getSalesRevenue = async (req: Request, res: Response) => {
  try {
    const result = await Order.aggregate([
      { $match: { status: "completed" } },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$total_amount" },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
        },
      },
    ]);

    res.status(200).json(result[0] || { totalRevenue: 0 });
  } catch (err) {
    res.status(500).json({ error: "Failed to generate sales revenue report" });
  }
};

export const getTopSellingProducts = async (req: Request, res: Response) => {
  try {
    const result = await Order.aggregate([
      { $match: { status: "completed" } },
      { $unwind: "$items" },
      {
        $group: {
          _id: "$items.product_id",
          totalQuantitySold: { $sum: "$items.quantity" },
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "product",
        },
      },
      { $unwind: "$product" },
      {
        $project: {
          _id: 0,
          productId: "$product._id",
          name: "$product.name",
          totalQuantitySold: 1,
        },
      },
      { $sort: { totalQuantitySold: -1 } },
    ]);

    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to generate top-selling products report" });
  }
};

export const getMonthlySales = async (req: Request, res: Response) => {
  try {
    const result = await Order.aggregate([
      { $match: { status: "completed" } },
      {
        $group: {
          _id: {
            year: { $year: "$order_date" },
            month: { $month: "$order_date" },
          },
          totalSales: { $sum: "$total_amount" },
        },
      },
      {
        $sort: {
          "_id.year": -1,
          "_id.month": -1,
        },
      },
    ]);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to generate monthly sales report" });
  }
};
