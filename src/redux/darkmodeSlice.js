import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "cookies-next";

const theme = {
  isCompact:
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false
};

let windowMode=theme.isCompact ;
let initialState = {
  ThemeValue:getCookie("themeValue"),
 
};

if (initialState.ThemeValue==undefined) {
  initialState.ThemeValue=windowMode
}
  if (typeof getCookie("themeValue")==undefined) {
    
    setCookie("themeValue",windowMode)
  }


const darkModeSlice = createSlice({
  name: "darkSlice",
  initialState,
  reducers: {
    darkTheme: (state, action) => {
      const userSelected = action.payload;
     state.ThemeValue=userSelected.value;
  console.log(userSelected);
    },
  },
});
export const darkmodeActions = darkModeSlice.actions;
export default darkModeSlice.reducer;
