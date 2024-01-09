import express from 'express'
import { verifyAdmin } from '../utils/verifyToken.js';
import { createRoom, DeleteRoom,GetAllRooms,GetSingleRoom,UpdateRoom } from '../controllers/Roomcontroller.js';
const router=express.Router();
// CREATE
router.post("/:hotelId",verifyAdmin,createRoom);
// // DELETE
router.delete('/delete/:roomid/:hotelId',verifyAdmin,DeleteRoom);
// //UPDATE
router.put('/update/:roomid/:hotelId',verifyAdmin,UpdateRoom)
// //GET
router.get('/getroom/:roomid',GetSingleRoom)
// // GETALL
router.get('/allrooms',GetAllRooms)
export default router