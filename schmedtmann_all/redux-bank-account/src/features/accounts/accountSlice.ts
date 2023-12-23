import { Reducer } from "redux";


export interface AccountState {
  balance: number;
  loan: number;
  loanPurpose: string;
  isLoading: boolean;
}

const initialStateAccount: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};


interface DepositAction {
  type: 'account/deposit';
  payload: number;
}

interface WithdrawAction {
  type: 'account/withdraw';
  payload: number;
}

interface RequestLoanAction {
  type: 'account/requestLoan';
  payload: {
    amount: number;
    purpose: string;
  };
}

interface PayLoanAction {
  type: 'account/payLoan';
}

interface ConvertingCurrency {
  type: 'account/convertingCurrency';
}

type Action = DepositAction | WithdrawAction | RequestLoanAction | ConvertingCurrency | PayLoanAction;

export const accountReducer: Reducer<AccountState, Action> = (state = initialStateAccount, action) => {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload, isLoading: false };
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload };
    case 'account/convertingCurrency':
      return{...state, }
    case 'account/requestLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount
      };
    case 'account/payLoan':
      return { ...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan };
    default:
      return state;
  }
};


export function deposit(amount: number, currency: string): DepositAction {
  if(currency === 'USD') return { type: 'account/deposit', payload: amount };

  //@ts-ignore
  return async function (dispatch, getState) {
    dispatch({type: 'account/convertingCurrency'})
    const host = 'api.frankfurter.app';
      //API Call
    const res = await fetch(`https://${host}/latest?amount=${amount}&from=${currency}&to=USD`);
    const data  = await res.json();
    const converted = data.rates.USD;

      // return action 
      dispatch({ type: 'account/deposit', payload: converted });
  }
}

export function withdraw(amount: number): WithdrawAction {
  return { type: 'account/withdraw', payload: amount }
}

export function requestLoan(amount: number, purpose: string): RequestLoanAction {
  return {
    type: 'account/requestLoan',
    payload: {
      amount: amount,
      purpose: purpose,
    },
  }
}

export function payloan(): PayLoanAction {
  return {type: 'account/payLoan'}
}