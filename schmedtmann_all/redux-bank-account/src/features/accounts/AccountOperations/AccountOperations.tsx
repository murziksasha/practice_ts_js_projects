import { useDispatch } from 'react-redux';
import styles from './AccountOperations.module.scss';
import { useState } from 'react';
import {
  deposit,
  payloan,
  requestLoan,
  withdraw,
} from '../accountSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../components/redux/store';

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
  const { loan, loanPurpose, balance } = useSelector(
    (store: RootState) => store.account
  );
  console.log(balance);

  function handleDeposit() {
    if (!depositAmount) return;
    //@ts-ignore
    dispatch(deposit(depositAmount));
    setDepositAmount('');
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    //@ts-ignore
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount('');
  }

  function handleRequestLoan() {
    if (!loanAmount || !currentLoanPurpose) return;
    //@ts-ignore
    dispatch(requestLoan(loanAmount, currentLoanPurpose));
    setLoanAmount('');
    setLoanPurpose('');
  }

  function handlePayLoan() {
    if (!loan || balance < loan) return;
    //@ts-ignore
    dispatch(payloan());
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

          <button onClick={handleDeposit}>
            Deposit {depositAmount}
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
