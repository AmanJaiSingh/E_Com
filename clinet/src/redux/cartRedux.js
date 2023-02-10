import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      let val = state.products.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (val !== -1) {
        state.products[val].quantity += action.payload.quantity;
      } else {
        state.quantity += 1;
        state.products.push(action.payload);
      }
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      let val = state.products.findIndex((item) => {
        console.log(action.payload);
        return item._id === action.payload._id;
      });
      if (val !== -1) {
        state.products[val].quantity -= 1;
        state.total -= action.payload.price;
        if (state.products[val].quantity === 0) {
          state.products.splice(val, 1);
          state.quantity -= 1;
        } else {
        }
      }
      if (state.total <= 0) {
        state.total = 0;
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
