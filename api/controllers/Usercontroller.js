import User from '../Models/User.js'
export const DeleteUser=async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id,{$set:req.body});
        res.status(200).json({"suceess":"User deleted"});
    } catch (error) {
        return next(error);
    }
}
export const UpdateUser=async(req,res,next)=>{
    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true});
        res.status(200).json(updatedUser);
    } catch (error) {
        return next(error);
    }
}
export const getUser=async(req,res,next)=>{
    try {
        const RecentUser=await User.findById(req.params.id);
        res.status(200).json(RecentUser);
    } catch (error) {
        return next(error);
    }
}
export const getAllUsers=async(req,res,next)=>{
    try {
        const AllUsers=await User.find();
        res.status(200).json(AllUsers);
    } catch (error) {
        return next(error);
    }
}
