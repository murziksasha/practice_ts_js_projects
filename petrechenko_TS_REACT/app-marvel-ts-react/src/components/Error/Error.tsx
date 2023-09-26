import styles from './Error.module.scss';
import errorImg from './error.gif';

interface ErrorProps { }

export const Error = ({ }: ErrorProps) => (
  <div className={styles.error}>
    <img src={errorImg} 
    style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto'}}
    alt="Error" 
    />
  </div>
);
