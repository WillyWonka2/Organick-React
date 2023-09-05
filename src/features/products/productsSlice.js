import { createSlice } from "@reduxjs/toolkit"
import allProducts from '../objects/objects'
import allNews from "../objects/news"


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: allProducts,
        filtered: [],
        news: allNews,
        isLoading: false,
        singleProd: {},
    },
    reducers: {
        filterByPrice: (state, { payload }) => {
            state.filtered = state.list.filter(({ price }) => price < payload)
        },
        takeSingleProduct: (state, { payload }) => {
            let product = state.list.filter((prod) => prod.id === +payload)
            state.singleProd = product[0]
        }


    }
})

export const { filterByPrice, takeSingleProduct } = productsSlice.actions;
export default productsSlice.reducer;