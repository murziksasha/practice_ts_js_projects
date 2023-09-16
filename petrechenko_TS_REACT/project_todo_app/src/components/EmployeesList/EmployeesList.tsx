import { EmployeesListItem, EmployeesListItemProps } from '../EmployeesListItem';
import styles from './EmployeesList.module.scss';

export type EmployeesListProps = {
  data: EmployeesListItemProps[];
  onDelete: (id: number) => void;
  onToggleIncrease: (id: number) => void;
  onToggleRaise: (id: number) => void;
}


export const EmployeesList: React.FC<EmployeesListProps> = ({data, onDelete, onToggleIncrease, onToggleRaise}) => (
  <ul className={styles.employeesList}>
    {
      data.map((employee) => (
        <EmployeesListItem 
          key = {employee.id} 
          {...employee}
          onDelete={() => onDelete(employee.id)}
          onToggleIncrease={() => onToggleIncrease(employee.id)}
          onToggleRaise={() => onToggleRaise(employee.id)}
          />
      ))
    }
  </ul>
);
