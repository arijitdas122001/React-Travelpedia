import express from 'express'
import { CreateHotel, DeleteHotel, UpdateHotel, getAllHotel, getHotel } from '../controllers/Hotelcontroller.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router=express.Router();
// CREATE
router.post("/",verifyAdmin,CreateHotel);
// DELETE
router.delete('/delete/:id',verifyAdmin,DeleteHotel)
//UPDATE
router.put('/update/:id',verifyAdmin,UpdateHotel)
//GET
router.get('/getHotel/:id',getHotel)
// GETALL
router.get('/allhotels',getAllHotel)
export default router