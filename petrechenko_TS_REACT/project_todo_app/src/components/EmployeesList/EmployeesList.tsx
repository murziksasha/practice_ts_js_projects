import { EmployeesListItem, EmployeesListItemProps } from '../EmployeesListItem';
import styles from './EmployeesList.module.scss';

export type EmployeesListProps = {
  data: EmployeesListItemProps[],
  onDelete: (id: any) => void;
}


export const EmployeesList: React.FC<EmployeesListProps> = ({data, onDelete}) => (
  <ul className={styles.employeesList}>
    {
      data.map((employee) => (
        <EmployeesListItem 
          key = {employee.id} 
          {...employee}
          onDelete={() => onDelete(employee.id)}
          />
      ))
    }
  </ul>
);
