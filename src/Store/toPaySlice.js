import { createSlice } from "@reduxjs/toolkit";


const ToPay = createSlice({
    name: "Pay",
    initialState: { showPay: false },
    reducers: {
        show(state) {
            state.showPay = true;
        },
    }
});

export const toPayAction = ToPay.actions;
export default ToPay.reducer;