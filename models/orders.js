import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const orderSchema = new Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  color: { String },
  size: { String },
  total_item: { type: Number, required: true },
  total_price: { type: Number, required: true },
  orderStatus: { type: String },
  paymentMethod: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const OrderModel = model("Order", orderSchema, "orders");
