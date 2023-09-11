import { createSlice } from "@reduxjs/toolkit"
import weeklyNews from "../objects/weeklyNews";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        list: weeklyNews,
        filtered: [],
        isLoading: false,
        singleNew: {}
    },
    reducers: {
        // filterByPrice: (state, { payload }) => {
        //     state.filtered = state.list.filter(({ price }) => price < payload)
        // },
        getSingleProduct: (state, { payload }) => {
            const singleProd = state.list.filter(({id})=> id === +payload)
            state.singleNew = singleProd[0]
        }
    }
})

export const {getSingleProduct} = newsSlice.actions
export default newsSlice.reducer;