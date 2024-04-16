import { Router } from "express";
import { addCartItem, deleteCartItem, getAllCartItems, getCartItem } from "../controllers/CartController.js";


//Create order routes
const router = Router()


//Define routes
router.post('/', addCartItem);

router.get('/', getAllCartItems);

router.get('/:id', getCartItem);

router.delete('/:id', deleteCartItem);




export default router;
