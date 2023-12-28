import { useDispatch } from 'react-redux';
import styles from './AccountOperations.module.scss';
import { useState } from 'react';
import {
  deposit,
  payLoan,
  requestLoan,
  withdraw,
} from '../accountSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../components/redux/store';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { updateName } from '../../customers/customerSlice';

interface AccountOperationsProps {}

export const AccountOperations = ({}: AccountOperationsProps) => {
  const [depositAmount, setDepositAmount] = useState<number | string>(
    ''
  );
  const [withdrawalAmount, setWithdrawalAmount] = useState<
    number | string
  >('');
  const [loanAmount, setLoanAmount] = useState<number | string>('');
  const [currentLoanPurpose, setLoanPurpose] = useState<
    number | string
  >('');
  const [currency, setCurrency] = useState('USD');

  const dispatch = useDispatch();
  const { loan, loanPurpose, balance, isLoading } = useSelector(
    (store: RootState) => store.account
  );

  function handleDeposit() {
    if (!depositAmount) return;
  
    // Explicitly annotate the type of dispatch
    const dispatchFn = dispatch as ThunkDispatch<RootState, undefined, AnyAction>;

    const depositNumber = typeof depositAmount === 'string' ? parseFloat(depositAmount) : depositAmount;
      
    dispatchFn(deposit(depositNumber, currency));
    setDepositAmount('');
    setCurrency('USD');
  }
  

  function handleWithdrawal() {
    if (!withdrawalAmount) return;

    const withdrawalNumber = typeof withdrawalAmount === 'string' ? parseFloat(withdrawalAmount) : withdrawalAmount;

    dispatch(withdraw(withdrawalNumber));
    setWithdrawalAmount('');
  }

  function handleRequestLoan() {
    if (!loanAmount || !currentLoanPurpose) return;

    const amountNumber = typeof loanAmount === 'string' ? parseFloat(loanAmount) : loanAmount;
    const purposeString = currentLoanPurpose.toString();
  
    dispatch(requestLoan({ amount: amountNumber, purpose: purposeString }));
    
    setLoanAmount('');
    setLoanPurpose('');
  }
  
  

  function handlePayLoan() {
    if (!loan || balance < loan) return;
    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className='inputs'>
        <div>
          <label>Deposit</label>
          <input
            type='number'
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value='USD'>US Dollar</option>
            <option value='EUR'>Euro</option>
            <option value='GBP'>British Pound</option>
          </select>

          <button onClick={handleDeposit}
            disabled={isLoading}
          >
            {isLoading ? 'Converting...' : `Deposit ${depositAmount}`}
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type='number'
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type='number'
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder='Loan amount'
          />
          <input
            value={currentLoanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder='Loan purpose'
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        {loan > 0 && (
          <div>
            <span>
              Pay back ${loan} ({loanPurpose}){' '}
            </span>
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        )}
      </div>
    </div>
  );
};
