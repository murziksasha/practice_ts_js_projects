import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";

interface CartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface AppState {
  cart: CartItem[];
}

const initialState: AppState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action){
      //payload = newItem;
      state.cart.push(action.payload);
    },
    deleteItem(state, action){
      //payload = pizzaId
      state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action){
      //payload = pizzaId
      const currentItem = state.cart.find(item => item.pizzaId === action.payload);
      if(currentItem){
        currentItem.quantity++;
        currentItem.totalPrice = currentItem.quantity * currentItem.unitPrice;
      }
    },
    decreaseItemQuantity(state, action){
      //payload = pizzaId
      const currentItem = state.cart.find(item => item.pizzaId === action.payload);
      if(currentItem){
        currentItem.quantity--;
        currentItem.totalPrice = currentItem.quantity * currentItem.unitPrice;
      }
    },
    clearCart(state){
      state.cart = [];
    }
  }
});

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: RootState) => state.cart.cart;

export const getTotalCartQuantity= (state: RootState) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: RootState) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id: number) => (state: RootState) => state.cart.cart.find(item=>item.pizzaId === id)?.quantity ?? 0;


