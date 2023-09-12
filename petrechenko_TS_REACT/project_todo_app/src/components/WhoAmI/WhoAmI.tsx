import styles from './WhoAmI.module.scss';
import {Component } from 'react';

interface WhoAmIProps { 
  name: string;
  surname: string;
  link: string;
}

interface WhoAmIState {
  year: number;
}


export class WhoAmI extends Component<WhoAmIProps, WhoAmIState> {

  state = {
    year: 27,
  };

  nextAge(ageChange: number) {
    this.setState((prevState) => ({
      year: prevState.year + ageChange,
    }));
  }

  render(){
    const {name, surname, link} = this.props;

    // increaseStateValue() {
    //   this.setState
    // }
    return (
      <div>
        <h1>My name is {name} , my surname is - {surname}, the birthDay is: {2023 - this.state.year} </h1>
        <a href={link}>My profile</a>
        <br />
        <button onClick={() => this.nextAge(1)} className='btn btn-danger'>+</button>
        <span>{this.state.year}</span>
        <button onClick={() => this.nextAge(-1)} className='btn btn-info'>-</button>
      </div>
    )
  }
}
  // <div className={styles.whoAmI}>
  //   WhoAmI Component
  // </div>
