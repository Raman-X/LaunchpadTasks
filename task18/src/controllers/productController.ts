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

export const reviewProduct = async (req: Request, res: Response) => {
  try {
    const { user, rating, comment } = req.body;
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    product.reviews?.push({ user, rating, comment });
    await product.save();

    res.status(200).json({ message: "review added successfully" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { name, category, brand, price, stock, features } = req.body;
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    if (name !== undefined) product.name = name;
    if (category !== undefined) product.category = category;
    if (brand !== undefined) product.brand = brand;
    if (price !== undefined) product.price = price;
    if (stock !== undefined) product.stock = stock;
    if (features !== undefined) product.features = features;

    await product.save();
    res.status(200).json({ message: "product updated successfully" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    await product.deleteOne();
    res.status(200).json({ message: "product deleted successfully" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
