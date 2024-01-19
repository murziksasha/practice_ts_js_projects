import { ThunkAction, Action } from '@reduxjs/toolkit';
import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./features/user/userSlice";
import cartReducer from './features/cart/cartSlice';
import { RootState } from './rootReducer';



const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;