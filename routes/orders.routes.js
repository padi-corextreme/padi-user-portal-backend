import { Router } from "express";


//Create order routes
const router = Router()


//Define routes
router.post('/', addOrder);

router.get('/', getAllOrders);

router.get('/:id', getOrder);

// router.delete('/:id', deleteOrder);



export default router;
