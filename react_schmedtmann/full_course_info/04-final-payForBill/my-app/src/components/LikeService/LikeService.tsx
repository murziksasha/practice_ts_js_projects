import { useState } from 'react';
import styles from './LikeService.module.scss';

interface LikeServiceProps {
  tip: number;
  setValueTip: (num: number) => void;
  children: React.ReactNode;
 }

export const LikeService = ({tip, setValueTip, children }: LikeServiceProps) => {

  return (
    <div className={styles.likeService}>
      <label>{children}</label>
      <select name="service" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setValueTip(Number(e.target.value))} value={tip}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
