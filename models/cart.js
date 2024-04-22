import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const cartSchema = new Schema({
  product: { type: mongoose.Schema.Types.ObjectId, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const CartModel = model("Cart", cartSchema, "carts");
