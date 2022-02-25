import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "cart",
    initialState: {
      items: [],
      totalAmt: 0,
      totalQuan: 0,
    },
    reducers: {
        addItem(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuan++;
            if(! existingItem){
                state.items.push({id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.name});
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = +existingItem.totalPrice + +newItem.price;
            }
        },
        removeItem(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuan--;
            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = +existingItem.totalPrice - +existingItem.price;
            }
        }
    }
});

export const cartAction = CartSlice.actions;
export default CartSlice.reducer;