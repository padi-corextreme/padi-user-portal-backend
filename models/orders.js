import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    name:{type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: Number, required: true},
    discount: {type: Number},
    colors: [String],
    sizes: [String],
    total_item: {type: Number, required: true},
    total_price: {type: Number, required: true},
    orderNumber: {type: String, required: true},
    orderStatus: {type: String, required: true},
    paymentMethod: {type: String, required: true},
    seller: {type: String, required: true},
});

export const OrderModel = model('Order', orderSchema, 'orders');