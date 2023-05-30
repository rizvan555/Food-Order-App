import { createSlice } from "@reduxjs/toolkit";  //icliyi-daxili qurmaq ücündür

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += action.payload.quantity;
      state.totalPrice += action.payload.totalPrice;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
