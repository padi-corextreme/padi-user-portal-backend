import {UserModel} from '../models/user.js';
import { hashPassword, comparePassword} from '../helpers/auth.js';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';



//Register Endpoint
export const addUser = async (req, res, next) => {
    try {
        //Check if name was entered
        const {name, email, telephone, password} = req.body
        if (!name) {
            return res.json({
                error: 'Name is required'
            })
        };

        //Check if password is good
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            })
        };

        //Check if email exist
        const exist = await UserModel.findOne({email});
        if (exist) {
            return res.json({
                error: 'Email already exist'
            })
        };

        //Check if telephone number is up to 10
        if (!telephone || telephone.length !== 10) {
            return res.json({
                error: 'Telephone number is required and should be 10 characters long'
            })
        };


        //Add a user to the database
        const hashedPassword = await hashPassword(password)
        const createResult = await UserModel.create({...req.body,
        password: hashedPassword,});
        
        // Return response
        res.status(201).json(createResult);
    } catch (error) {
        next(error);
    }
};



//Login Endpoint
export const loginUser = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        //Check if user exists
        const user = await UserModel.findOne({email});
        if (!user) {
            return res.json({
                error: 'No user found'
            })
        };

        //Check if password match
        
        const match =  await comparePassword(password, user.password);
        if (match) {
            return res.json('Password match');
        } else{
            return res.json({error: "Password don't match"});
        }
       
    } catch (error) {
        next(error);
    }
};


// Endpoint for logging out
export const logOut = async (req, res, next) => {

}




//Endpoint for getting all users
export const getAllUsers = async (req, res, next) => {
    try {
      //  Get all users from database
      const findResults = await UserModel.find();
      // Return response
      res.status(200).json(findResults);
    } catch (error) {
      next(error);
    }
  };



  //Endpoint for getting a user
  export const getUser = async (req, res, next) => {
    try {
      // Get a user by id
      const findByIdResult = await UserModel.findById(req.params.id).populate('interestId');
      // Return 404 if no user is found
      if (findByIdResult === null) {
        res.status(404).json({
          message: `User with ID: ${req.params.id} not found`,
        });
      } else {
        // Return response
        res.status(200).json(findByIdResult);
      }
    } catch (error) {
      next(error);
    }
  };
  
  


  //Endpoint for updating a user
  export const updateUser = async (req, res, next) => {
    try {
       // Get a user by id
       const findByIdResult = {_id: new ObjectId(req.params.id)}
       const update = {
        $set: {interests: req.body.interests}
       }
      
        const newUpdate = await UserModel.updateOne(findByIdResult, update)
        // Return response
        res.status(202).json(newUpdate);
      
    } catch (error) {
        next(error);   
    }
  };
  



  //Endpoint for deleting a user
  export const deleteUser = async (req, res, next) => {
    try {
        // Get a user by id
        const findByIdResult = await UserModel.findById(req.params.id);
       
        const user = await findByIdResult.deleteOne({});

        // Return response
          res.status(200).json(user)
        
      } catch (error) {
        next(error);
      }
  }; 