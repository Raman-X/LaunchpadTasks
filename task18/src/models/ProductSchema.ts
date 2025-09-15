import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  category?: string;
  brand?: string;
  price: number;
  stock?: number;
  features?: string[];
  reviews?: {
    user: mongoose.Types.ObjectId;
    rating: number;
    comment?: string;
  }[];
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    category: String,
    brand: String,
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    features: [String],
    reviews: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, required: true },
        comment: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", ProductSchema);
