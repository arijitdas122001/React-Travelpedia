import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    user:null,
};
 const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true,
            state.user=action.payload
        },
        logOut:(state,action)=>{
            state.status=false,
            state.user=null;
        }
    }
 });
 export const {login,logOut}=authSlice.actions;
 export default authSlice.reducer;