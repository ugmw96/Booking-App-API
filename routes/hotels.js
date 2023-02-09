import express from 'express';
import { addHotel, countByType, deleteHotel, getCountByCities, getHotel, getHotels, updateHotel } from '../controllers/hotels.js';
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
 router.get('/find/:id', getHotel);
 //getCountByCities
 router.get('/countByCities', getCountByCities);
 //getCountByTypes
 router.get('/countByTypes', countByType);

export default router;