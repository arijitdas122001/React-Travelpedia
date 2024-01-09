import mongoose from "mongoose";
// const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxpeople: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required:true,
  },
  roomNumbers:[{number:Number,unavailableDates:{type:[Date]}}]
},{timestamps:true});
// // roomNumbers:
// [
//     {number:101,unavailableDates:['from date','any or date ','then other','']}
//     {number:102,unavailableDates:['from date','any or date ','then other','']}
//     {number:103,unavailableDates:['from date','any or date ','then other','']}
//     {number:104,unavailableDates:['from date','any or date ','then other','']}
// ]
export default mongoose.model("Room", RoomSchema);
