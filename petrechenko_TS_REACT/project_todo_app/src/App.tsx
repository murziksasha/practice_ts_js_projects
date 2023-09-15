import React, {Component} from 'react';

import './App.css';
import { AppInfo } from './components/AppInfo';
import { SearchPanel } from './components/SearchPanel';
import { AppFilter } from './components/AppFilter';
import { EmployeesList } from './components/EmployeesList';
import { EmployeesAddForm } from './components/EmployeesAddForm';

import { EmployeesListItemProps} from './components/EmployeesListItem';
import { WhoAmI } from './components/WhoAmI';

{/* 
      <WhoAmI name='Alex' surname='Bingo' link='https://facebook.com.ua'/>
      <WhoAmI name='Sasha' surname='Grigoriev' link='https://facebook.com.ua'/>
      <br /><br /><br /><br /><br /> */}

type AppState = {
  data: EmployeesListItemProps[];
}

const data: EmployeesListItemProps[] = [
  {name: 'John C.', salary: 800, increase: false, star: false, id: 1},
  {name: 'Alex M.', salary: 3000, increase: false, star: false, id: 2},
  {name: 'Carl W.', salary: 5000, increase: false, star: false, id: 3},
];

class  App extends Component<{}, AppState>{
  state = {
    data: [...data],
  }
  maxId= this.state.data.length + 1;

  deleteItem = (id: number) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  addUser = (newUser: EmployeesListItemProps) => {
    newUser.id = this.maxId++;
    this.setState(({data}) => {
      const newArr = [...data, newUser];
      return {
          data: newArr
      }
  });
  }

  onToggleIncrease = (id: number) => {
    console.log(`Increase this ${id}`)
  }

  onToggleRaise = (id: number) => {
    console.log(`Rise this ${id}`)
  }

  
  render() {
      return (
        <div className="app">
    
          <AppInfo 
            data={this.state.data}
          />
    
          <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
          </div>
          <EmployeesList 
            data={this.state.data}
            onDelete={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleRaise={this.onToggleRaise}
            />
          <EmployeesAddForm             
          addUser={this.addUser}
          />
        </div>
    )
  }
}

export default App;
