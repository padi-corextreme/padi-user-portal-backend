import { Router } from "express";
import { addUser, getAllUsers, getUser, loginUser, updateUser, deleteUser, getProfile } from "../controllers/UserController.js";
import { verifyToken } from "../helpers/auth.js";


//Create users router
const router = Router();


//Define routes
router.post('/register', addUser);

router.post('/login', loginUser);

router.get('/', getAllUsers);

router.get('/profile',  verifyToken, getUser);

router.patch('/:id', updateUser).delete('/:id', deleteUser);;




export default router;