import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const wishlistSchema = new Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, required: true}
});

export const WishlistModel = model('Wishlist', wishlistSchema, 'wishlists');