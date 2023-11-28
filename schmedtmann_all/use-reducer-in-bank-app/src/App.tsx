import {useReducer } from 'react';
import './App.css'

/*
INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/

type TypeOfAction =
  'openAccount' 
  | 'deposit'
  | 'withdraw'
  | 'requestLoan'
  | 'payLoan'
  | 'closeAccount';

export interface Action {
  type: TypeOfAction;
  payload?: any;
}

interface State {
  balance: number;
  loan: number;
  isActive: boolean;
  isLoan: boolean;
}


function reducer(state: State, action: Action): State {

  if(!state.isActive && action.type !== 'openAccount') return state;

  switch (action.type) {
    case 'openAccount':
      return {
        ...state,
        isActive: true,
        balance: 500
      };
    case 'deposit':
      return {
          ...state,
          balance: state.balance + action.payload,
  
      };
    case 'withdraw':
      return {
          ...state,
          balance: state.balance > 0 ? state.balance - action.payload : state.balance
  
      };
    case 'requestLoan':
      return {
        ...state,
        balance: state.isLoan ? state.balance + 5000 : state.balance,
        loan: state.isLoan ? action.payload : state.loan,
        isLoan: false,
      };
    case 'payLoan':
      return {
          ...state,
          balance: (!state.isLoan && state.balance >= 5000) ? state.balance - 5000 : state.balance,
          loan: (!state.isLoan && state.balance >= 5000) ? state.loan - 5000 : state.loan,
  
      };
    case 'closeAccount':
      return {
        ...(!state.isLoan ? state : initialState),
          isActive: state.loan === 0 && state.balance === 0 ? false : true,
      };
    default:
      return state;
  }
}

interface IData {
  balance: number;
  loan: number;
  isActive: boolean;
  isLoan: boolean;
}

const initialState: IData = {
  balance: 0,
  loan: 0,
  isActive: false,
  isLoan: true,
};



function App() {

  const [{balance, loan, isActive}, dispatch] = useReducer(reducer, initialState);



  return (
    <>
      <h1>useReducer Bank Account</h1>
      <h3>Balance: {balance}</h3>
      <h3>Loan: {loan}</h3>
      <button onClick={() => dispatch({type:'openAccount'})} disabled={isActive}>Open Account</button>
      <button onClick={() => dispatch({type:'deposit', payload: 150}) } disabled={!isActive}>Deposit 150</button>
      <button onClick={() => dispatch({type:'withdraw', payload: 50}) } disabled={!isActive}>Widthdraw 50</button>
      <button onClick={() => dispatch({type:'requestLoan', payload: 5000}) } disabled={!isActive}>Requeast a loan of 5000</button>
      <button onClick={() => dispatch({type:'payLoan'}) } disabled={!isActive}>Pay Loan</button>
      <button onClick={() => dispatch({type:'closeAccount'}) } disabled={!isActive}>Close account</button>
    </>
  )
}

export default App
