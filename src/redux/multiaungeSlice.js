import { createSlice } from "@reduxjs/toolkit";


const initialState={
    launge:"az"
}

const multilaungeSlice=createSlice({
    name:"multilanguage",
initialState,
reducers:{
    changeLaunguage:(state,action)=>{
const selectedLAunge=action.payload;
console.log(state.launge);
switch (selectedLAunge) {
    case "az":
        state.launge="az"
        console.log("az dili secildi");
        break;
        case "tr":
        console.log("tr dili secildi");   
        state.launge="tr"
            break;
            case "en":
                state.launge="en"
                console.log("en dili secildi");
                break;

}

    }
}
})
export const multilaungeActions=multilaungeSlice.actions;
export default multilaungeSlice.reducer;