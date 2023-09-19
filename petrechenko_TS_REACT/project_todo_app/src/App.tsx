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
  term: string;
  filter: string;
}

const data: EmployeesListItemProps[] = [
  {name: 'John C.', salary: 800, increase: true, star: false, id: 1},
  {name: 'Alex M.', salary: 3000, increase: false, star: true, id: 2},
  {name: 'Carl W.', salary: 5000, increase: false, star: false, id: 3},
];

class  App extends Component<{}, AppState>{
  state = {
    data: [...data],
    term: '',
    filter: 'all',
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
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const oldDataObj = data[index];
      const newItem = {...oldDataObj, increase: !oldDataObj.increase};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index+ 1)];

      return {
        data: newArr
      }
    });
  }

  onToggleRaise = (id: number) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, star: !item.star}
        }
        return item;
      })
    }));
  }

  searchEmp = (items: EmployeesListItemProps[], term: string) => {
    if(term.length === 0) return items;
    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    });
  }

  onUpdateSearch = (term: string) => {
    this.setState({term});
  }

  filterPost = (items: EmployeesListItemProps[], filter: string) => {
    switch(filter) {
      case 'increase':
        return items.filter(item => item.increase);
      case 'moreThan1000':
        return items.filter(item => item.salary > 1000);
      default: 
        return items;

    }
  }

  onFilterSelect = (filter: string) => {
    this.setState({filter});
  }

  
  render() {
    const {data, term, filter} = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);


      return (
        <div className="app">
    
          <AppInfo 
            data={data}
          />
    
          <div className="search-panel">
            <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
            <AppFilter
            onFilterSelect={this.onFilterSelect}
            />
          </div>
          <EmployeesList 
            data={visibleData}
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
