import styles from './AppFilter.module.scss';

interface AppFilterProps { }

export const AppFilter = ({ }: AppFilterProps) => (
  <div className={`${styles.appFilter} btn-group`}>
    <button 
    className="btn btn-light"
    type='button'
    >All coworkers</button>
        <button 
    className="btn btn-outline-danger"
    type='button'
    >Raised</button>
        <button 
    className="btn btn-outline-info"
    type='button'
    >Salary more 1000$</button>
  </div>
);
