import { createSlice } from "@reduxjs/toolkit";
const initialState={
    withListItem: [],
    totalAmount:0,
}
const withListSlice =createSlice({
name:"withList",
initialState,
reducers:{
    withListItemAddDelet:(state,action)=>{
const addedItem=action.payload;

const tryItem= state.withListItem.find((item)=>item.id===addedItem.id)
if (!tryItem){
    state.totalAmount++
    state.withListItem.push({
id:addedItem.id,
title:addedItem.title,
price:addedItem.price,
image:addedItem.image

    })
}else{
    state.totalAmount--;
   state.withListItem= state.withListItem.filter((item)=>tryItem.id!==item.id)
}
    
   
}
}})
export const withListActions=withListSlice.actions;
export default withListSlice.reducer;