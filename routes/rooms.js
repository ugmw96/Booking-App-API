import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/rooms.js';
import { verifyAdmin } from '../utils/verifyToken.js';

 const router = express.Router();

 //create
 router.post('/:hotelId', verifyAdmin,createRoom );
 //update
 router.put('/:id', verifyAdmin, updateRoom);
 //delete
 router.delete('/:id/:hotelId',verifyAdmin, deleteRoom);
 //getAll
 router.get('/', getRooms);
 //getOne
 router.get('/:id', getRoom);
 

export default router;