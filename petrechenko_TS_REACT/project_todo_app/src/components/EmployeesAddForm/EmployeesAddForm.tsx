import { ChangeEvent, Component } from 'react';
import styles from './EmployeesAddForm.module.scss';

// interface EmployeesAddFormProps { }

export class EmployeesAddForm extends Component{

  state = {
    name: '',
    salary: ''
  }

  onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    const {name, salary} = this.state;
    return (
      <div className={styles.employeesAddForm}>
      <h3>Add a new coworker</h3>
      <form className='d-flex'>
        <input type="text" 
        name='name'
        className={`${styles.employeesAddFormLabel} ${'form-control'}`} 
        onChange={(e) => this.onChangeValue(e)}
        value={name}
        />
        <input 
        name='salary'
        type="number" placeholder='Salary in $' 
        className={`${styles.employeesAddFormLabel} ${'form-control'}`}
        onChange={(e) => this.onChangeValue(e)}
        value={salary}
        />
        <button type="submit"
        className={`${styles.employeesAddFormBtn} ${'btn btn-info btn-outline-light'}`}
        >ADD</button>
      </form>
    </div>
    )
  }
};
