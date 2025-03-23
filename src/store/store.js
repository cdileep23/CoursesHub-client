import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import themeReducer from './themeSlice'

export const appStore=configureStore({
    reducer:{
        auth:authSlice,
        theme: themeReducer,
    }
})