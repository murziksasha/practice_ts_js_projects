import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  pizzaId: number;
  nama: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface AppState {
  cart: CartItem[];
}

const initialState: AppState = {
  // cart: [],
  cart: [
    {
      pizzaId: 12,
      nama: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32
    }
  ]
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
      // state.cart = [
      //   {
      //     pizzaId: 0,
      //     nama: '',
      //     quantity: 0,
      //     unitPrice: 0,
      //     totalPrice: 0
      //   }
      // ];
      state.cart = [];
    }
  }
});

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

