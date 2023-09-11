import styles from './EmployeesListItem.module.scss';

interface EmployeesListItemProps { }



export const EmployeesListItem = ({ }: EmployeesListItemProps) => {

  const style = {
    divIconStyle: 'd-flex justify-content-center align-items-center',
  }

  return (
    <li className={`${styles.employeesListItem} list-group-item d-flex justify-content-between`}>
      <span className={`${styles.employeesListItem}-label`}>John Smith</span>
      <input type="text" className={`${styles.employeesListItem}-input`} defaultValue={'1000$'} />
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
