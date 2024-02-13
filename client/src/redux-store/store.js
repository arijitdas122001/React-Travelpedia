import { configureStore,} from "@reduxjs/toolkit";
import authreducer from "./reducers/authreducer";
import searchreducer from "./reducers/searchreducer";
const store=configureStore({
    reducer:{
        authR:authreducer,
        searchR:searchreducer,
    },
    middleware:getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;