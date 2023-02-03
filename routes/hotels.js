import express from 'express';
import { addHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotels.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';

 const router = express.Router();

 //create
 router.post('/',addHotel);
 //update
 router.put('/:id', updateHotel);
 //delete
 router.delete('/:id', deleteHotel);
 //getAll
 router.get('/', getHotels);
 //getOne
 router.get('/:id', getHotel);

export default router;