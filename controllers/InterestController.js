import { ObjectId } from "mongodb";
import { InterestModel } from "../models/interest.js";
import { UserModel } from "../models/user.js";




export const addInterest = async (req, res, next) => {
    try {
        // Get an interest by id
          const findByIdResult = await UserModel.findById(req.params.id);

        // Add interest to database
        const createResult = await InterestModel.create(findByIdResult, {...req.body});

        // Return response
        res.status(201).json(createResult);

      } catch (error) {
        next(error);
      }
    };


    export const getAllInterests = async (req, res, next) => {
        try {
          //  Get all interests from database
          const findResults = await InterestModel.find();

          // Return response
          res.status(200).json(findResults);
          
        } catch (error) {
          next(error);
        }
      };



    export const getInterest = async (req, res, next) => {
        try {
            // Get a single interest by id
            const findByIdResult = await InterestModel.findById(req.params.id);

            // Return 404 if no interest is found
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



        export const updateInterest = async (req, res, next) => {
            try {
               // Get an interest by id
               const findByIdResult = {_id: new ObjectId(req.params.id)}
               const update = {$set: req.body}
              
                const newUpdate = await InterestModel.updateOne(findByIdResult, update)
                // Return response
                res.status(202).json(newUpdate);
              
            } catch (error) {
                next(error);   
            }
          };


        export const deleteInterest = async (req, res, next) => {
            try {
                // Get an interest by id
                const findByIdResult = await InterestModel.findById(req.params.id);
               
                const user = await findByIdResult.deleteOne({});
        
                // Return response
                  res.status(200).json(user)
                
              } catch (error) {
                next(error);
              }
          }; 