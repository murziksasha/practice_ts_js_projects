import styles from './Footer.module.scss';

interface FooterProps { }

export const Footer = ({ }: FooterProps) => (
  <footer className={styles.menu}>
    {new Date().toLocaleTimeString()}   We're currently OPEN!
  </footer>
);
