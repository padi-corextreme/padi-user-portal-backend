import { Schema, model } from "mongoose";


const userSchema = new Schema({
    name: {type: String, required: true},
    telephone: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

export const UserModel = model('User', userSchema, 'users');