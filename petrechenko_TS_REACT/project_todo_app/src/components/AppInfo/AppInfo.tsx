import { EmployeesListItemProps } from '../EmployeesListItem';
import styles from './AppInfo.module.scss';

interface AppInfoProps {
  data: EmployeesListItemProps[];
 }

export const AppInfo = ({ data}: AppInfoProps) => {


  return (
    <div className={styles.appInfo}>
      <h1>Учет сотрудников в компании №</h1>
      <h2>Общее число сотрудников: {data.length}</h2>
      <h2>Премию получат:{data.filter(item=>item.increase).length}</h2>
    </div>
  );
}
