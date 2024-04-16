import { Router } from "express";
import { addWishlist, deleteWishlist, getAllWishlists, getWishlist } from "../controllers/wishlistControllers.js";


//Create order routes
const router = Router()


//Define routes
router.post('/', addWishlist);

router.get('/', getAllWishlists);

router.get('/:id', getWishlist);

router.delete('/:id', deleteWishlist);



export default router;
