import styles from './Bill.module.scss';

interface BillProps { 
  bill: number;
  setValueBill: (num: number) => void;
  children: any;
}

export const Bill = ({bill, setValueBill, children }: BillProps) => (
  <div className={styles.bill} >
    {children}
    <input type="number" name="bill" id="bill" value={bill}
      onChange={e => setValueBill(Number(e.target.value))}
    />
  </div>
);
