import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const orderSchema = new Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, required: true},
  total_item: { type: Number, required: true },
  total_price: { type: Number, required: true },
  orderStatus: { type: String },
  paymentMethod: { type: String, required: true },
  user_name: { type: String, required: true },
});

export const OrderModel = model("Order", orderSchema, "orders");
