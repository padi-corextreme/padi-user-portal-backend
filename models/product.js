import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name:{type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    sub_category: {type: String, required: true},
    discount: {type: Number},
    color: {String},
    size: {String},
    seller: {type: String, required: true},
    seller_logo: {type: String, required: true}
});

export const ProductModel = model('Product', productSchema, 'products');