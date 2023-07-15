import { createSlice } from "@reduxjs/toolkit";
let initialState={
value:"ligth"
}
const darkModeSlice=createSlice({
          name:"darkSlice",
initialState,
         reducers:{
darkTheme:(state,action)=>{
const userSelected=action.payload;
if(state.value!==userSelected.mode){
state.value=userSelected.mode
    
console.log("userSelected="+userSelected.mode);
console.log("Redux State="+initialState.value);
}
}
          }
    
})
export const darkmodeActions = darkModeSlice.actions;
export default darkModeSlice.reducer;