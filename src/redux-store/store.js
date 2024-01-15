import { configureStore,} from "@reduxjs/toolkit";
import authreducer from "./reducers/authreducer";
import searchreducer from "./reducers/searchreducer";
const store=configureStore({
    reducer:{
        auth:authreducer,
        searchR:searchreducer,
    },
    middleware:getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;