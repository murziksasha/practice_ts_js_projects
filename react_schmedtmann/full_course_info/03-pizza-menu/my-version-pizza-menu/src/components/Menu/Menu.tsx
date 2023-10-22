import { Pizza } from '../Pizza';
import styles from './Menu.module.scss';

interface MenuProps { }

export const Menu = ({ }: MenuProps) => (
  <div className={styles.menu}>
    <Pizza/>
  </div>
);
