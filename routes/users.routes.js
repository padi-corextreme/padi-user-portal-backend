import { Router } from "express";
import { addUser, getAllUsers, getUser, loginUser, updateUser, deleteUser } from "../controllers/UserController.js";


//Create users router
const router = Router();


//Define routes
router.post('/users', addUser);

router.post('/login', loginUser);

router.get('/users', getAllUsers);

router.get('/users/:id', getUser);

router.patch('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);



export default router;