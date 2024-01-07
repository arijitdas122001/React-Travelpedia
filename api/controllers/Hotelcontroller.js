import Hotel from '../Models/Hotels.js'
export const CreateHotel=async(req,res,next)=>{
    const newHotelData=new Hotel(req.body)
   try {
    const savedHotel=await newHotelData.save();
    res.status(200).json(savedHotel);
   } catch (error) {
    return next(error);
   }
}
export const DeleteHotel=async(req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id,{$set:req.body});
        res.status(200).json({"suceess":"Hotel deleted"});
    } catch (error) {
        return next(error);
    }
}
export const UpdateHotel=async(req,res,next)=>{
    try {
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true});
        res.status(200).json(updatedHotel);
    } catch (error) {
        return next(error);
    }
}
export const getHotel=async(req,res,next)=>{
    try {
        const RecentHotel=await Hotel.findById(req.params.id);
        res.status(200).json(RecentHotel);
    } catch (error) {
        return next(error);
    }
}
export const getAllHotel=async(req,res,next)=>{
    try {
        const allHotels=await Hotel.find();
        res.status(200).json(allHotels);
    } catch (error) {
        return next(error);
    }
}
