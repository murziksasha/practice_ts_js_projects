import styles from './EmployeesAddForm.module.scss';

interface EmployeesAddFormProps { }

export const EmployeesAddForm = ({ }: EmployeesAddFormProps) => (
  <div className={styles.employeesAddForm}>
    <h3>Add a new coworker</h3>
    <form className='d-flex'>
      <input type="text" 
      className={`${styles.employeesAddFormLabel} ${'form-control'}`} />
      <input type="number" placeholder='Salary in $' 
      className={`${styles.employeesAddFormLabel} ${'form-control'}`}
      />
      <button type="submit"
      className={`${styles.employeesAddFormBtn} ${'btn btn-info btn-outline-light'}`}
      >ADD</button>
    </form>
  </div>
);
