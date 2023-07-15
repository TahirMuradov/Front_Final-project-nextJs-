import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkmodeSlice"

const store=configureStore({
    reducer:{
    darkSlice:darkModeSlice
    }
})
export default store;