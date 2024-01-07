import express from 'express'
import { LogIn, Register } from '../controllers/Authcontroller.js';
const router=express.Router();
router.post('/register',Register);
router.post('/login',LogIn);
export default router