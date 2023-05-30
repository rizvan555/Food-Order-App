import { configureStore } from "@reduxjs/toolkit"; //reduxun globalidir
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
