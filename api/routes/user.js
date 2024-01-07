import express from 'express'
import { DeleteUser, UpdateUser, getAllUsers, getUser } from '../controllers/Usercontroller.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
const router=express.Router();
router.put('/update/:id',verifyUser,UpdateUser);
router.delete('/delete/:id',verifyUser,DeleteUser);
router.get('/get/:id',verifyAdmin,getUser);
router.get('/getAll',verifyAdmin,getAllUsers);
export default router;