import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name:{type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    logo: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: Number, required: true},
    discount: {type: Number},
    colors: [String],
    sizes: [String]
});

export const ProductModel = model('Product', productSchema, 'products');