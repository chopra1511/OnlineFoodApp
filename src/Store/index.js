import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import topayReducer from './toPaySlice';


const store = configureStore({
    reducer:{
        cart: cartReducer,
        pay: topayReducer,
    }
});

export default store;