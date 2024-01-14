
import { combineReducers } from '@reduxjs/toolkit';
import  userReducer  from "./features/user/userSlice";
import cartReducer from './features/cart/cartSlice';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  // Add other reducers here if any
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
