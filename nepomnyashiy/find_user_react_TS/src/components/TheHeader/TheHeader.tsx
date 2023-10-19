
import styles from './TheHeader.module.scss';
import { ThemeSwitcher } from 'components/ThemeSwitcher';


export const TheHeader = () => {


  return (
    <div className={styles.theHeader}>
      <div className={styles.logo}>
        devfinder
      </div>
        <ThemeSwitcher/>
    </div>
  );
}
