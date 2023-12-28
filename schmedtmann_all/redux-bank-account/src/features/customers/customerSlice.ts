import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CustomerState {
  fullName: string;
  nationalID: string;
  createdAt: string;
}

const initialState: CustomerState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer(state, action: PayloadAction<{fullName: string, nationalID: string}>){
      const {fullName, nationalID} = action.payload;
      state.fullName = fullName;
      state.nationalID = nationalID;
      state.createdAt = new Date().toISOString();
    },
    updateName(state, action: PayloadAction<{fullName: string}>){
      const {fullName} = action.payload;
      state.fullName = fullName;
    },
  }
});

export const {createCustomer, updateName} = customerSlice.actions;


export default customerSlice.reducer;