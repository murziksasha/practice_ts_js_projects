import styles from './Footer.module.scss';

interface FooterProps { }

export const Footer = ({ }: FooterProps) => {

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className={styles.menu}>
      {isOpen ? `We're currently open NOW ! Till ${closeHour} 00` : `Sorry, we're CLOSED, our works time: ${openHour} 00 - ${closeHour} 00`}
      <br/>
      <button style={{backgroundColor: 'yellow', border: 'none', width: 100, height: 50, marginTop: 20, borderRadius: '11%'}}>Order</button>
    </footer>
  );
}
