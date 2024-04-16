import { Router } from "express";
import { addUser, getAllUsers, getUser, loginUser, updateUser, deleteUser } from "../controllers/UserController.js";


//Create users router
const router = Router();


//Define routes
router.post('/register', addUser);

router.post('/login', loginUser);

router.get('/', getAllUsers);

router.get('/:id', getUser);

router.patch('/:id', updateUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);



export default router;