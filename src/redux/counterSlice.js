import { createAction, createSlice } from "@reduxjs/toolkit";

const reset= createAction("counter/reset");

const counterSlice= createSlice({
    name:'counter',
    initialState: 0,
    reducers:{
        increment: state => state+1,
        decrement: state=> state-1
    },
    extraReducers:(builder)=>{
        builder.addCase(reset, ()=>0);
    }
});
export const{increment,decrement}=counterSlice.actions;
export {reset};
export default counterSlice.reducer;
