import express from "express";
import { createHotel, deleteHotel, getAllHotels, getSingleHotel, updateHotel } from "../controllers/hotelController.js";

const router = express.Router()

//create new Hotel
router.post('/',createHotel)

//update Hotel
router.put('/:id',updateHotel)

//update Hotel
router.delete('/:id',deleteHotel)

//update Hotel
router.get('/:id',getSingleHotel)

//update Hotel
router.get('/',getAllHotels)


export default router