import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkmodeSlice"
import multilaungeSlice from "./multiaungeSlice"

const store=configureStore({
    reducer:{
    darkSlice:darkModeSlice,
    multilanguage:multilaungeSlice
    }
    
})
export default store;