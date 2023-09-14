import { useState } from 'react';
import styles from './EmployeesListItem.module.scss';

export interface EmployeesListItemProps {
  name: string;
  salary: number;
  increase: boolean;
  star: boolean;
 }



export const EmployeesListItem = ({ name, salary, increase, star}: EmployeesListItemProps) => {
  const [raise, setRaise] = useState(increase);
  const [like, setLike] = useState(star);

  const style = {
    divIconStyle: 'd-flex justify-content-center align-items-center',
    color: raise ? '#e09f3e' : ''
  }

  const starLike = like ? {opacity: '1', transform: 'translate(0px)'}: {};
  
  const onIncrease = () => {
    setRaise((prevCounter) => !prevCounter);
  }

  const likeChanged = () => {
    setLike((prevLike) => !prevLike);
  }

  return (
    <li className={`${styles.employeesListItem} d-flex justify-content-between`} style={style}>
      <span 
        className={`${styles.employeesListItem}`}
        onClick={likeChanged}
        >{name}</span>
      <input type="text" className={`${styles.employeesListItem}`} defaultValue={salary+ ' $'} 
      style={style}/>
      <div className={`${styles.employeesListItemIconWrapper} ${style.divIconStyle}`}>
        <button 
        type="button" 
        className={`${styles.employeesListItemBtnCookie} ${"btn-cookie btn-sm"}`}
        onClick={onIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className={`${styles.employeesListItemBtnTrash} ${"btn-trash btn-sm"}`}>
          <i className="fas fa-trash"></i>
        </button>
        <i className={`${styles.employeesListItemStar} ${"fas fa-star"}`} style={starLike}></i>
      </div>
    </li>
  );
}
