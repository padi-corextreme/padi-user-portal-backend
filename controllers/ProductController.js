import { ObjectId } from "mongodb";
import { ProductModel } from "../models/product.js";




export const addProduct = async (req, res, next) => {
    try {
        // Add product to database
        const createResult = await ProductModel.create({...req.body});

        // Return response
        res.status(201).json(createResult);

      } catch (error) {
        next(error);
      }
    };


    export const getAllProducts = async (req, res, next) => {
        try {
          //  Get all products from database
          const findResults = await ProductModel.find();

          // Return response
          res.status(200).json(findResults);
          
        } catch (error) {
          next(error);
        }
      };



    export const getProduct = async (req, res, next) => {
        try {
            // Get a single product by id
            const findByIdResult = await ProductModel.findById(req.params.id);

            // Return 404 if no product is found
            if (findByIdResult === null) {
              res.status(404).json({
                message: `Product with ID: ${req.params.id} not found`,
              });
            } else {
              // Return response
              res.status(200).json(findByIdResult);
            }
          } catch (error) {
            next(error);
          }
        };



        export const updateProduct = async (req, res, next) => {
            try {
               // Get a product by id
               const findByIdResult = {_id: new ObjectId(req.params.id)}
               const update = {$set: req.body}
              
                const newUpdate = await ProductModel.updateOne(findByIdResult, update)
                // Return response
                res.status(202).json(newUpdate);
              
            } catch (error) {
                next(error);   
            }
          };


        export const deleteProduct = async (req, res, next) => {
            try {
                // Get a product by id
                const findByIdResult = await ProductModel.findById(req.params.id);
               
                const user = await findByIdResult.deleteOne({});
        
                // Return response
                  res.status(200).json(user)
                
              } catch (error) {
                next(error);
              }
          }; 