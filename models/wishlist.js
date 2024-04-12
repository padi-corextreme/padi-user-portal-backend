import { Schema, model } from "mongoose";

const wishlistSchema = new Schema({
    name:{type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
});

export const WishlistModel = model('Wishlist', wishlistSchema, 'wishlists');