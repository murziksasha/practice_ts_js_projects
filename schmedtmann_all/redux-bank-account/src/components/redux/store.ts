import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../../features/accounts/accountSlice';
import customerReducer  from '../../features/customers/customerSlice';

export interface RootState {
  account: ReturnType<typeof accountReducer>;
  customer: ReturnType<typeof customerReducer>;
}

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
    // Add other slices if needed
  },
});

export default store;

