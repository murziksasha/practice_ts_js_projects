import { EmployeesListItem } from '../EmployeesListItem';
import styles from './EmployeesList.module.scss';

interface EmployeesListProps { }

export const EmployeesList = ({ }: EmployeesListProps) => (
  <ul className={styles.employeesList}>
    <EmployeesListItem/>
    <EmployeesListItem/>
    <EmployeesListItem/>
  </ul>
);
