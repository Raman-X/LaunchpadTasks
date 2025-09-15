import mongoose, { Document, Schema } from "mongoose";

export interface IOrder extends Document {
  customer_id: mongoose.Types.ObjectId;
  order_date?: Date;
  items: {
    product_id: mongoose.Types.ObjectId;
    quantity: number;
    unit_price: number;
  }[];
  status?: string;
  total_amount?: number;
}

const OrderSchema: Schema = new Schema(
  {
    customer_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    order_date: { type: Date, default: Date.now },
    items: [
      {
        product_id: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
        unit_price: { type: Number, required: true },
      },
    ],
    status: { type: String, default: "pending" },
    total_amount: Number,
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>("Order", OrderSchema);
