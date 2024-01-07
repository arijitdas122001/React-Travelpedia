import bcrypt  from 'bcryptjs'
import jwt from 'jsonwebtoken';
import User from "../Models/User.js"
import { createError } from '../utils/createError.js';
import { json } from 'express';
// SignUp
export const Register=async(req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const NewUser=new User({
            userName:req.body.userName,
            email:req.body.email,
            password:hash,
            isAdmin:req.body.isAdmin
        });
        const NewUserData=await NewUser.save();
        res.status(200).send(NewUserData);
    } catch (error) {
        next(error);
    }
};
// Log-IN
export const LogIn=async(req,res,next)=>{
    try {
        const qUser=await User.findOne({userName:req.body.userName});
        if(!qUser)return next(createError(400,"User Not Found"));
        const isPassword=await bcrypt.compare(req.body.password,qUser.password);
        if(!isPassword)return next(createError(401,"User or Password is incorrect"));
        const token = jwt.sign({id:qUser._id,isAdmin:qUser.isAdmin}, process.env.SECRET_KEY);
        const{password,isAdmin,...others}=qUser._doc;
        res.cookie("access_Token",token,{
            httpOnly:true,
        })
        .status(200).json({details:{...others},isAdmin});
    } catch (error) {
        next(error);
    }
};