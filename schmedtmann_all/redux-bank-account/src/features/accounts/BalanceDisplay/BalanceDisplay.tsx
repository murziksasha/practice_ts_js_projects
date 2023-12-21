import styles from './BalanceDisplay.module.scss';

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}


interface BalanceDisplayProps { }

export const BalanceDisplay = ({ }: BalanceDisplayProps) => (
  <div className="balance">{formatCurrency(123456)}</div>
);
