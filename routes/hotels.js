import express from 'express';
import { addHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotels.js';
import { verifyAdmin } from '../utils/verifyToken.js';

 const router = express.Router();

 //create
 router.post('/', verifyAdmin, addHotel);
 //update
 router.put('/:id', verifyAdmin, updateHotel);
 //delete
 router.delete('/:id',verifyAdmin, deleteHotel);
 //getAll
 router.get('/', getHotels);
 //getOne
 router.get('/:id', getHotel);

export default router;