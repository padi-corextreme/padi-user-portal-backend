import mongoose from "mongoose";
import { Schema, model } from "mongoose";


const userSchema = new Schema({
    name: {type: String, required: true},
    telephone: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    // password: {type: String, required: true},
    interests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Interest"
    }],
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wishlist"
    }]
});

export const UserModel = model('User', userSchema, 'users');