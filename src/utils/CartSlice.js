import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
            (item) => item.card.info.id !== action.payload.id
            );
        },

        clearCard:(state)=>{
            state.items=[];
        }
    }
})

export const{addItem,removeItem,clearCard}=cartSlice.actions;
export default cartSlice.reducer;