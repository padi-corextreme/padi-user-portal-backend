import { ObjectId } from "mongodb";
import { OrderModel } from "../models/orders.js";




export const addOrder = async (req, res, next) => {
    try {
        // Add order to database
        const createResult = await OrderModel.create({...req.body});

        // Return response
        res.status(201).json(createResult);

      } catch (error) {
        next(error);
      }
    };


    export const getAllOrders = async (req, res, next) => {
        try {
          //  Get all orders from database
          const findResults = await OrderModel.find();

          // Return response
          res.status(200).json(findResults);
          
        } catch (error) {
          next(error);
        }
      };



    export const getOrder = async (req, res, next) => {
        try {
            // Get a single order by id
            const findByIdResult = await OrderModel.findById(req.params.id);

            // Return 404 if no order is found
            if (findByIdResult === null) {
              res.status(404).json({
                message: `Order with ID: ${req.params.id} not found`,
              });
            } else {
              // Return response
              res.status(200).json(findByIdResult);
            }
          } catch (error) {
            next(error);
          }
        };


     export const updateOrder = async (req, res, next) => {
          try {
             // Get an order by id
             const findByIdResult = {_id: new ObjectId(req.params.id)}
             const update = { $set: req.body}
            
              const newUpdate = await OrderModel.updateOne(findByIdResult, update)
              // Return response
              res.status(202).json(newUpdate);
            
          } catch (error) {
              next(error);   
          }
        };
