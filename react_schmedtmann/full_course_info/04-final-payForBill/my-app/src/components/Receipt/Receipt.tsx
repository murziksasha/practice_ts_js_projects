import styles from './Receipt.module.scss';

interface ReceiptProps { 
  bill: number;
  tip: number
}

export const Receipt = ({bill, tip }: ReceiptProps) => {

  return (
    <div className={styles.Receipt}>
      <h1>{`You pay $${bill + tip} ($${bill} + $${tip} tip)`}</h1>
    </div>
  );
}
