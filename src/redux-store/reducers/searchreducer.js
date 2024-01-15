import { createSlice } from "@reduxjs/toolkit";

const initialState={
    dates:[{
        startDate: new Date(),
        endDate: new Date(),
    }],
    destination:"default",
    options:{},
};
const Searchreducers=createSlice({
    name:"searhr",
    initialState,
    reducers:{
        storeSearchValue:(state,action)=>{
            state.dates=action.payload.dates,
            state.destination=action.payload.destination,
            state.options=action.payload.stayOptions
        }
    },
    
});
export const {storeSearchValue}=Searchreducers.actions;
export default Searchreducers.reducer;