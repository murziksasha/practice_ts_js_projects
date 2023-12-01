import styles from './Button.module.scss';

interface IPropsButton {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: string;
}

export default function Button({children, onClick, type = 'primary'}: IPropsButton) {
  return (
    <button 
      className={`${styles.btn} ${styles[type]}`}
      onClick={onClick}>
      {children}
    </button>
  )
}
