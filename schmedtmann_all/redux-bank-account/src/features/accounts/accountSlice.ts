import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../components/redux/store";


export interface AccountState {
  balance: number;
  loan: number;
  loanPurpose: string;
  isLoading: boolean;
}

const initialState: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit(state, action: PayloadAction<number>) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
    },
    requestLoan(state, action: PayloadAction<{ amount: number; purpose: string }>) {
      const { amount, purpose } = action.payload;

      if (state.loan > 0) {
        return;
      }

      state.loan = amount;
      state.loanPurpose = purpose;
      state.balance += amount;
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = '';
    },
    convertingCurrency(state){
      state.isLoading = true;

    }
  },
});

export const { payLoan, withdraw, requestLoan } = accountSlice.actions;

export function deposit(amount: number, currency: string) {
  if(currency === 'USD') return {type: 'account/deposit', payload: amount};

  return async function(dispatch: Dispatch, getState: () => RootState) {
    dispatch({type: 'account/convertingCurrency'});
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    dispatch({type:'account/deposit', payload: converted});
  }
}

export default accountSlice.reducer;
