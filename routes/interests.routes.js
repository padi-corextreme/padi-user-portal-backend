import { Router } from "express";
import { addInterest, deleteInterest, getAllInterests, getInterest, updateInterest } from "../controllers/InterestController.js";



//Create users router
const router = Router();


//Define routes
router.post('/:user_id', addInterest);

router.get('/', getAllInterests);

router.get('/:id', getInterest);

router.patch('/:id', updateInterest);

router.delete('/:id', deleteInterest);



export default router;