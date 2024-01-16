import Hotel from '../Models/Hotels.js'
import Room from '../Models/Room.js'
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
    const {min,max,limit,...others}=req.query;
    try {
        const hotels = await Hotel.find({
            ...others,
            cheapestPrice:{$gt:min || 0,$lt:max || 10000},
        }).limit(limit);
          res.status(200).json(hotels);
    } catch (error) {
        return next(error);
    }
}
export const countHotels=async(req,res,next)=>{
    const allcities=req.query.cities.split(',');
    try {
        const countcities=await Promise.all(
            allcities.map((ele)=>{
                return Hotel.countDocuments({city:ele})
            })
        )
        res.status(200).json(countcities);
    } catch (error) {
        return next(error);
    }
}
export const countHotelcatagory=async(req,res,next)=>{ 
    const allcatagories=req.query.cat.split(',');
    try {
        const coutnCatagory=await Promise.all(
            allcatagories.map((ele)=>{
                return Hotel.countDocuments({type:ele})
            })
        )
        res.status(200).json(coutnCatagory);
    } catch (error) {
        return next(error);
    }
}
export const getRooomInfo=async(req,res,next)=>{
    try {
        const hotel=await Hotel.findById(req.params.id);
        const listrooms=await Promise.all(
            hotel.rooms.map((ele)=>{
                return Room.findById(ele);
            })
        )
        res.status(200).send(listrooms);
    } catch (error) {
        
    }
}