import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { home } from "@/services"
export const fetchHomeDataAction = createAsyncThunk("fetchdata", async () => {
    const res = await home.getHomeGoodPriceData();
    console.log(res)
})
const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        }
    }
})
export const {changeGoodPriceInfoAction } = homeSlice.actions;
export default homeSlice.reducer;