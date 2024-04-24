import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import cartRoute from "./routes/cart.routes.js";
import interestRoute from "./routes/interests.routes.js";
import orderRoute from "./routes/orders.routes.js";
import productRoute from "./routes/products.routes.js";
import userRoute from "./routes/users.routes.js";
import wishlistRoute from "./routes/wishlist.routes.js";

//create express app
const app = express();

//add middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//load routes
app.use("/users", userRoute);
app.use("/orders", orderRoute);
app.use("/wishlist", wishlistRoute);
app.use("/cart", cartRoute);
app.use("/products", productRoute);
app.use("/interests", interestRoute);

//make database connection
await mongoose.connect(process.env.MONGO_URI);

//start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
