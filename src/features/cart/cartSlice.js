import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            cartList: []
        },

        reducers:{
            addToCart: (state, {payload}) => {
                const isAdded = state.cartList.includes(payload)
                if(isAdded){
                    state.cartList.forEach((item)=>{
                        if(item.id === payload.id){
                            item.quantity += payload.quantity
                        }
                    })
                } else{
                    state.cartList.push(payload)
                }
            }
        }
    }
)

export default cartSlice.reducer;
