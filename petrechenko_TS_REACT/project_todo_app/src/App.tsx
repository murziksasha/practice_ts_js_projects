import React from 'react';

import './App.css';
import { AppInfo } from './components/AppInfo';
import { SearchPanel } from './components/SearchPanel';
import { AppFilter } from './components/AppFilter';
import { EmployeesList } from './components/EmployeesList';
import { EmployeesAddForm } from './components/EmployeesAddForm';

import { EmployeesListItemProps} from './components/EmployeesListItem';
import { WhoAmI } from './components/WhoAmI';

function App() {
  const data: EmployeesListItemProps[] = [
    {name: 'John C.', salary: 800, increase: false},
    {name: 'Alex M.', salary: 3000, increase: true},
    {name: 'Carl W.', salary: 5000, increase: false},
  ];
  return (
    <div className="app">


      <WhoAmI name='Alex' surname='Bingo' link='https://facebook.com.ua'/>
      <WhoAmI name='Sasha' surname='Grigoriev' link='https://facebook.com.ua'/>
      <br /><br /><br /><br /><br />


      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList data = {data}/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
