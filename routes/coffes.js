import express from 'express';
import {
  createCafe,
  deleteCafe,
  getAllCafes,
  getSingleCafe,
  updateCafe,
} from '../controllers/coffeeController.js';

const router = express.Router();

//create new Cafe
router.post('/', createCafe);

//update Cafe
router.put('/:id', updateCafe);

//update Cafe
router.delete('/:id', deleteCafe);

//update Cafe
router.get('/:id', getSingleCafe);

//update Cafe
router.get('/', getAllCafes);

export default router;
