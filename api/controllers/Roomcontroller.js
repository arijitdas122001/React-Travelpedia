import Hotels from "../Models/Hotels.js";
import Room from "../Models/Room.js";

export const createRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelId;
    const newRoom=new Room(req.body)
    try {
        const Savednewroom=await newRoom.save();
        try {
            const hotel=await Hotels.findByIdAndUpdate(hotelId,
                {$push:{rooms: Savednewroom._id}})
            } catch (error) {
                next(error);
            }
        res.status(200).send(Savednewroom);
    } catch (error) {
        next(error);
    }
}
export const DeleteRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelId;
    const roomId=req.params.roomid;
    try {
       await Room.findByIdAndDelete(roomId);
        try {
            const hotel=await Hotels.findByIdAndUpdate(hotelId,
                {$pull:{rooms: roomId}})
            } catch (error) {
                next(error);
            }
        res.status(200).send({"sucess":"room is deleted"});
    } catch (error) {
        next(error);
    }
}
export const UpdateRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelId;
    const roomId=req.params.roomid;
    try {
       const updatedRooom=await Room.findByIdAndUpdate(roomId,
        {$set:req.body},
        {new:true}
        );
        try {
            const hotel=await Hotels.findByIdAndUpdate(hotelId,
                {$set:{rooms: updatedRooom._id}})
            } catch (error) {
                next(error);
            }
        res.status(200).send(updatedRooom);
    } catch (error) {
        next(error);
    }
}
export const GetSingleRoom=async(req,res,next)=>{
    const roomId=req.params.roomid;
    try {
       const room=await Room.findById(roomId);
        res.status(200).send(room);
    } catch (error) {
        next(error);
    }
}
export const GetAllRooms=async(req,res,next)=>{
    try {
       const allrooms=await Room.find();
        res.status(200).send(allrooms);
    } catch (error) {
        next(error);
    }
}