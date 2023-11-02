import { useState } from 'react';
import { IInitialFriends } from '../../types/types';
import { Button } from '../Button';
import styles from './FromSplitBill.module.scss';

interface FromSplitBillProps {
  selectedFriend: IInitialFriends;
  onHandleSplitBill: (value: number) => void;
 }

export const FromSplitBill = ({ selectedFriend, onHandleSplitBill}: FromSplitBillProps) => {
  const {name} = selectedFriend;
  const [bill, setBill] = useState<string | number>('');
  const [paidByUser, setPaidByUser] = useState<string | number>('');
  const [whoIsPaying, setWhoIsPaying] = useState('user');
  const paidByFriend = bill ? Number(bill) - Number(paidByUser) : '';

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(!bill || !paidByUser) return;
    onHandleSplitBill(
      whoIsPaying === 'user' ? Number(paidByFriend) : -Number(paidByUser)
    );
  }

  return (
    <div className={styles.FromSplitBill}>
      <form className='form-split-bill' onSubmit={handleSubmit}>
        <h2>Split a bill with {name}</h2>
        <label>
          💵Bill Value
          <input type="text" 
            value={bill}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBill(Number(e.target.value))}
          />
        </label>
  
        <label>
          💵Your Expenses
          <input type="text" 
            value={paidByUser}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaidByUser(Number(e.target.value) > Number(bill) ? paidByUser : Number(e.target.value))}
          />
        </label>
  
        <label>
          💵{name}'s Expense
          <input type="text" disabled value={paidByFriend}/>
        </label>
  
        <label>Who is paying the bill?</label>
          <select 
            value={whoIsPaying}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setWhoIsPaying(e.target.value)}
          >
            <option value="user">YOU</option>
            <option value="friend">{name}</option>
          </select>
  
        <Button>SPLIT BILL</Button>
      </form>
    </div>
  );
}
