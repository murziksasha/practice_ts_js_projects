import styles from './Header.module.scss';

interface HeaderProps { }

export const Header = ({ }: HeaderProps) => (
  <div className={styles.header} >
    <h1>Fast React Pizza Co.</h1>
  </div>
);
