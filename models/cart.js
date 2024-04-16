import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    name:{type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: Number, required: true},
    discount: {type: Number},
    color: {String},
    size: {String},
    total_item: {type: Number, required: true},
    total_price: {type: Number, required: true},
});

export const CartModel = model('Cart', cartSchema, 'carts');