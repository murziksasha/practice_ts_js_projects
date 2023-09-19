import {EmployeesListItemProps} from '../EmployeesListItem';
import styles from './AppFilter.module.scss';

interface AppFilterProps {
  onFilterSelect: (filter: string)=>void;
 }

export const AppFilter: React.FC<AppFilterProps> = ({onFilterSelect}) => {

  const handleClickDataAttr = (e: any) => {
    const target = e.currentTarget.getAttribute('data-filter');
    onFilterSelect(target);
  }

  return (
    <div className={`${styles.appFilter} btn-group`}>
      <button 
      onClick={handleClickDataAttr}
      className="btn btn-light"
      data-filter='all'
      type='button'
      >All coworkers</button>
      <button
      onClick={handleClickDataAttr}
      className="btn btn-outline-danger"
      type='button'
      data-filter='increase'
      >Raised</button>
      <button
      onClick={handleClickDataAttr}
      className="btn btn-outline-info"
      type='button'
      data-filter='moreThan1000'
      >Salary more 1000$</button>
    </div>
  );
}
