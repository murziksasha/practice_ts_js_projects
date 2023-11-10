import styles from './Loader.module.scss';

interface LoaderProps { }

export const Loader = ({ }: LoaderProps) => (
  <div className='loader'>
    Loading...
  </div>
);
