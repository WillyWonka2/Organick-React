import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
import newsSlice from "./news/newsSlice";
import cartSlice from "./cart/cartSlice";
import portfoliosSlice from "./portfolios/portfoliosSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        news: newsSlice,
        cart: cartSlice,
        portfolios: portfoliosSlice
    },
    devTools: true,
})