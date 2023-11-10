import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps { 
  message: string
}

export const ErrorMessage = ({ message}: ErrorMessageProps) => (
  <div className="error">
    <span>⛔</span>
    {message}
  </div>
);
