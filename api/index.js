import express from "express";
import dotenv from "dotenv";
import { auth,Hotels, user,Rooms } from "./routes/allroutes.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from 'cors'
const app=express();
dotenv.config();
app.use(cors({origin:'http://localhost:5173',credentials:true}));
const dbConntect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected")
      } catch (error) {
        throw error;
      }
}
app.listen(8080,()=>{
  dbConntect();
  console.log("Backend Started")
})
app.use(cookieParser())
app.use(express.json());
app.use('/api/auth',auth);
app.use('/api/hotels',Hotels);
app.use('/api/user',user);
app.use('/api/rooms',Rooms);

// err MiddleWire
app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});