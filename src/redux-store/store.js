import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./reducers/authreducer";
const store=configureStore({
    reducer:{
        auth:authreducer,
    }
});
export default store;