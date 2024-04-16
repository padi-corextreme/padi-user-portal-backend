import { Router } from "express";
import { addProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/ProductController.js";



//Create users router
const router = Router();


//Define routes
router.post('/', addProduct);

router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.patch('/:id', updateProduct);

router.delete('/:id', deleteProduct);



export default router;