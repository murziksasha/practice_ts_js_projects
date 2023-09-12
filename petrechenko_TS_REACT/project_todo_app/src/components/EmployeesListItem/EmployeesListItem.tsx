import styles from './EmployeesListItem.module.scss';

export interface EmployeesListItemProps {
  name: string;
  salary: number;
  increase: boolean;
 }



export const EmployeesListItem = ({ name, salary, increase}: EmployeesListItemProps) => {

  const style = {
    divIconStyle: 'd-flex justify-content-center align-items-center',
    color: increase ? '#e09f3e' : ''
  }


  return (
    <li className={`${styles.employeesListItem} d-flex justify-content-between`} style={style}>
      <span className={`${styles.employeesListItem}`}>{name}</span>
      <input type="text" className={`${styles.employeesListItem}`} defaultValue={salary} 
      style={style}/>
      <div className={`${styles.employeesListItemIconWrapper} ${style.divIconStyle}`}>
        <button type="button" className={`${styles.employeesListItemBtnCookie} ${"btn-cookie btn-sm"}`}>
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className={`${styles.employeesListItemBtnTrash} ${"btn-trash btn-sm"}`}>
          <i className="fas fa-trash"></i>
        </button>
        <i className={`${styles.employeesListItemStar} ${"fas fa-star"}`}></i>
      </div>
    </li>
  );
}
