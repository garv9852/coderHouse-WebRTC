import {configureStore} from "@reduxjs/toolkit";
import activationSlice from "./activationSlice";
import authSlice from "./authSlice";
export const store=configureStore({
    reducer:{
        auth:authSlice,
        activation:activationSlice
    }
})

export default store;