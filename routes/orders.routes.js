import { Router } from "express";
import { addOrder, getAllOrders, getOrder, updateOrder } from "../controllers/OrderController.js";


//Create order routes
const router = Router()


//Define routes
router.post('/', addOrder);

router.get('/', getAllOrders);

router.get('/:id', getOrder);

router.patch('/:id', updateOrder);

// router.delete('/:id', deleteOrder);



export default router;
