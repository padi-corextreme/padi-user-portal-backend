import express from"express";
import cors from "cors";
import mongoose from 'mongoose';
import userRoute from './routes/users.routes.js';
import cookieParser from "cookie-parser";


//create express app
const app = express()


//add middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());



//load routes
app.use('/users', userRoute);


//make database connection
await mongoose.connect(process.env.MONGO_URI);


//start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
});