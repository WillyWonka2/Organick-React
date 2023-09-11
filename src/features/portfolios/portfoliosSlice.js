import { createSlice } from "@reduxjs/toolkit";
import portfolios from "../objects/portfolios";

const portfoliosSlice = createSlice({
    name: "portfolios",
    initialState: {
        portfolios: portfolios
    },
    reducers: {}
})

export default portfoliosSlice.reducer