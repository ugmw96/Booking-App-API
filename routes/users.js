import express from 'express';
import { verifyTokenAccess } from '../utils/verifyToken.js'

 const router = express.Router();

 router.get('/checktoken', verifyTokenAccess, (req, res) => {
  res.send('success');
  res.send(req);
 })

 

export default router;