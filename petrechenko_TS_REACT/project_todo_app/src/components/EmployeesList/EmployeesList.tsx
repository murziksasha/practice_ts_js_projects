import { EmployeesListItem, EmployeesListItemProps } from '../EmployeesListItem';
import styles from './EmployeesList.module.scss';


export const EmployeesList = ({ data }: { data: EmployeesListItemProps[] }) => (
  <ul className={styles.employeesList}>
    {
      data.map((employee, index) => (
        <EmployeesListItem key = {index} {...employee}/>
      ))
    }
  </ul>
);
