import styles from './EmployeesListItem.module.scss';


export interface EmployeesListItemProps {
  id: number;
  name: string;
  salary: number;
  increase: boolean;
  star: boolean;
  onDelete?: () => void;
  addUser?: () => void;
  onToggleIncrease?: () => void;
  onToggleRaise?: () => void;
 }


export const EmployeesListItem: React.FC<EmployeesListItemProps> = ({ 
  name,
  salary, 
  increase, 
  star, 
  onDelete, 
  onToggleIncrease, 
  onToggleRaise
}) => {


  const style = {
    divIconStyle: 'd-flex justify-content-center align-items-center',
    color: increase ? '#e09f3e' : ''
  }

  const starLike = star ? {opacity: '1', transform: 'translate(0px)'}: {};
  

  return (
    <li className={`${styles.employeesListItem} d-flex justify-content-between`} style={style}>
      <span 
        className={`${styles.employeesListItem}`}
        onClick={onToggleRaise}
        >{name}</span>
      <input type="text" className={`${styles.employeesListItem}`} defaultValue={salary+ ' $'} 
      style={style}/>
      <div className={`${styles.employeesListItemIconWrapper} ${style.divIconStyle}`}>
        <button 
        type="button" 
        className={`${styles.employeesListItemBtnCookie} ${"btn-cookie btn-sm"}`}
        onClick={onToggleIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className={`${styles.employeesListItemBtnTrash} ${"btn-trash btn-sm"}`}
        onClick={onDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className={`${styles.employeesListItemStar} ${"fas fa-star"}`} style={starLike}></i>
      </div>
    </li>
  );
}
