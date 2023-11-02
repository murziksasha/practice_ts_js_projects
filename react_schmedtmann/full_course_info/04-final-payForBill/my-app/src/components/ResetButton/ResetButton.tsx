import styles from './ResetButton.module.scss';

interface ResetButtonProps {
  setValueBill: (num: number) => void;
 }

export const ResetButton = ({ setValueBill}: ResetButtonProps) => (
  <div className={styles.resetButton}>
    <button
      onClick={() => setValueBill(0)}
    >Reset</button>
  </div>
);
