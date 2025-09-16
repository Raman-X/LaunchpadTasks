import { Request, Response } from "express";
import Product from "../models/ProductSchema";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, category, brand, price, stock, features, reviews } = req.body;
    const newProduct = await Product.create({
      name,
      category,
      brand,
      price,
      stock,
      features,
      reviews,
    });

    res.status(200).json(newProduct);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const searchProducts = async (req: Request, res: Response) => {
  try {
    const {
      category,
      minPrice,
      maxPrice,
      maxStock,
      hasReviews,
      page = "1",
      limit = "10",
    } = req.query;

    const filter: any = {};

    if (category) filter.category = category;
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    if (maxStock) filter.stock = { $lte: 10 };
    if (hasReviews === "true")
      filter.reviews = { $exists: true, $not: { $size: 0 } };

    //pagination

    const pageNumber = Number(page);
    const pageLimit = Number(limit);
    const skip = (pageNumber - 1) * pageLimit;

    const filteredProducts = await Product.find(filter)
      .skip(skip)
      .limit(pageLimit);
    res.status(200).json({ message: "sucessfully searched", filteredProducts });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
