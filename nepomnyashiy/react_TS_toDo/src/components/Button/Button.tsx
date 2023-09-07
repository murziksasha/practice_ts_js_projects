import styles from './Button.module.scss';

interface ButtonProps { 
  children: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onclick }: ButtonProps) => (
  <button className={styles.button} onClick={onclick}>
    {children}
  </button>
);
