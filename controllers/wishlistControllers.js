import { ObjectId } from "mongodb";
import { WishlistModel } from "../models/wishlist.js";




export const addWishlist = async (req, res, next) => {
    try {
        // Add wishlist to database
        const createResult = await WishlistModel.create({...req.body});

        // Return response
        res.status(201).json(createResult);

      } catch (error) {
        next(error);
      }
    };


    export const getAllWishlists = async (req, res, next) => {
        try {
          //  Get all wishlists from database
          const findResults = await WishlistModel.find();

          // Return response
          res.status(200).json(findResults);
          
        } catch (error) {
          next(error);
        }
      };



    export const getWishlist = async (req, res, next) => {
        try {
            // Get a single wishlist by id
            const findByIdResult = await WishlistModel.findById(req.params.id);

            // Return 404 if no wishlist is found
            if (findByIdResult === null) {
              res.status(404).json({
                message: `Wishlist with ID: ${req.params.id} not found`,
              });
            } else {
              // Return response
              res.status(200).json(findByIdResult);
            }
          } catch (error) {
            next(error);
          }
        };


        export const deleteWishlist = async (req, res, next) => {
            try {
                // Get a wishlist by id
                const findByIdResult = await WishlistModel.findById(req.params.id);
               
                const user = await findByIdResult.deleteOne({});
        
                // Return response
                  res.status(200).json(user)
                
              } catch (error) {
                next(error);
              }
          }; 