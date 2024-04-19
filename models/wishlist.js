import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const wishlistSchema = new Schema({
    products: {type: mongoose.Schema.Types.ObjectId }
});

export const WishlistModel = model('Wishlist', wishlistSchema, 'wishlists');