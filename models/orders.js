import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    name:{type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    discount: {type: Number},
    color: {String},
    size: {String},
    total_item: {type: Number, required: true},
    total_price: {type: Number, required: true},
    orderStatus: {type: String},
    paymentMethod: {type: String, required: true},
    seller: {type: String, required: true},
});

export const OrderModel = model('Order', orderSchema, 'orders');