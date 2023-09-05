import { createSlice } from "@reduxjs/toolkit"
import weeklyNews from "../objects/weeklyNews";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        list: weeklyNews,
        filtered: [],
        isLoading: false
    },
    reducers: {
        // filterByPrice: (state, { payload }) => {
        //     state.filtered = state.list.filter(({ price }) => price < payload)
        // },
        // getRelatedProducts: (state, { payload }) => {
        //     const list = state.list.filter(({ category: { id } }) => id === payload)
        // }
    }
})

export default newsSlice.reducer;