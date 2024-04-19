import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const cartSchema = new Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, required: true},
    user_name: { type: String, required: true }
});

export const CartModel = model('Cart', cartSchema, 'carts');