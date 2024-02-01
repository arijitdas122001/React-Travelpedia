import { createSlice } from "@reduxjs/toolkit";

const initialState={
    dates:JSON.parse(localStorage.getItem('dates'))|| [],
    destination:JSON.parse(localStorage.getItem('location')) || "",
    category:"",
    types:"",
    options:{}
};
const Searchreducers=createSlice({
    name:"searhr",
    initialState,
    reducers:{
        storeSearchValue:(state,action)=>{
            state.dates=action.payload.dates,
            state.destination=action.payload.destination,
            state.options=action.payload.stayOptions,
            state.category=action.payload.category,
            state.types=action.payload.types
        }
    },
    
});
export const {storeSearchValue}=Searchreducers.actions;
export default Searchreducers.reducer;