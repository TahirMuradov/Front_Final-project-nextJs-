import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "cookies-next";


const theme = {
    isCompact:
      typeof window !== 'undefined'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : false
  };

  let windowMode ;

 
console.log();
let initialState={
ThemeValue:windowMode,
}
if (getCookie("themeValue")==null) {
  setCookie("themeValue",initialState.ThemeValue)

}else{
  windowMode=getCookie("themeValue")
}
//default theme
if (initialState.ThemeValue==null &&  getCookie("themeValue")==undefined) {
  initialState.ThemeValue=theme.isCompact
}
const darkModeSlice=createSlice({
          name:"darkSlice",
initialState,
         reducers:{
darkTheme:(state,action)=>{
const userSelected=action.payload;
console.log(userSelected.value);
if(state.ThemeValue!==userSelected.value){
    state.ThemeValue=userSelected.value
     
    }
  
   
}
          }
    
})
export const darkmodeActions = darkModeSlice.actions;
export default darkModeSlice.reducer;