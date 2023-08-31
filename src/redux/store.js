import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkmodeSlice"
import multilaungeSlice from "./multiaungeSlice"
import withListSilece from "./withListSlice"

const store=configureStore({
    reducer:{
    darkSlice:darkModeSlice,
    multilanguage:multilaungeSlice,
    withList:withListSilece
    }
    
})
export default store;