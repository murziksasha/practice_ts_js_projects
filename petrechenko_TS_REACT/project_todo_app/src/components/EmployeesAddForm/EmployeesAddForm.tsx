import { ChangeEvent, Component, FormEvent } from 'react';
import styles from './EmployeesAddForm.module.scss';
import { EmployeesListItemProps } from '../EmployeesListItem';

interface EmployeesAddFormProps { 
  addUser: (newUser: EmployeesListItemProps) => void;
}

export class EmployeesAddForm extends Component<EmployeesAddFormProps>{

  state = {
    name: '',
    salary: ''
  }

  onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmitNewUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, salary } = this.state;
    if((!name || name.length < 3) || (!salary || salary.length <= 0 || +salary <= 100) ) return;
    const newUser: EmployeesListItemProps = {
      name,
      salary: parseFloat(salary), // Convert salary to a number
      increase: false,
      star: false,
      id: 0, 
    };
  
    this.props.addUser(newUser);
  
    // Reset the form fields
    this.setState({
      name: '',
      salary: '',
    });
  }

  render() {
    const {name, salary} = this.state;

      return (
      <div className={styles.employeesAddForm}>
      <h3>Add a new coworker</h3>
      <form className='d-flex'
        onSubmit={this.onSubmitNewUser}
      >
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
