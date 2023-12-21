import { applyMiddleware, combineReducers, createStore } from 'redux';
import { accountReducer, AccountState } from '../../features/accounts/accountSlice';
import { customerReducer, CustomerState } from '../../features/customers/customerSlice';
import thunk from 'react-redux';

export interface RootState { 
  account: AccountState;
  customer: CustomerState;
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//@ts-ignore
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
