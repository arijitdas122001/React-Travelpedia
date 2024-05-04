import express from "express";
import { OrderCreation } from "../controllers/PaymentController.js";
const router=express.Router();
router.post('/order',OrderCreation);
export default router;