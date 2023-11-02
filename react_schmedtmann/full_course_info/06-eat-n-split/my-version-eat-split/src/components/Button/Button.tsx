import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
 }

export const Button = ({ onClick, children }: ButtonProps) => (
  <button  className='button' onClick={onClick}>
    {children}
  </button>
);
