import { ObjectId } from "mongodb";
import { CartModel } from "../models/cart.js";

export const addCartItem = async (req, res, next) => {
  try {
    // Add cart item to database
    const createResult = await CartModel.create({ ...req.body });

    // Return response
    res.status(201).json(createResult);
  } catch (error) {
    next(error);
  }
};

export const getAllCartItems = async (req, res, next) => {
  try {
    //  Get all cart items from database
    const findResults = await CartModel.find().populate("product", "user");

    // Return response
    res.status(200).json(findResults);
  } catch (error) {
    next(error);
  }
};

export const getCartItem = async (req, res, next) => {
  try {
    // Get a single cart item by id
    const findByIdResult = await CartModel.findById(req.params.id).populate("product", "user");

    // Return 404 if no order is found
    if (findByIdResult === null) {
      res.status(404).json({
        message: `Cart item with ID: ${req.params.id} not found`,
      });
    } else {
      // Return response
      res.status(200).json(findByIdResult);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteCartItem = async (req, res, next) => {
  try {
    // Get a cart item by id
    const findByIdResult = await CartModel.findById(req.params.id);

    const user = await findByIdResult.deleteOne({});

    // Return response
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
