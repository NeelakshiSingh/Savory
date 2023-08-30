import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Components/CartSlice";

const AppStore = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default AppStore;
