import { useSelector } from 'react-redux';
import { RootState } from '../../../components/redux/store';
import styles from './BalanceDisplay.module.scss';

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}


interface BalanceDisplayProps { }

export const BalanceDisplay = ({ }: BalanceDisplayProps) => {
  const balance = useSelector((store: RootState) => store.account.balance);

  return (
    <div className="balance">{formatCurrency(balance)}</div>
  );
} 
