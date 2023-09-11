import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppInfo } from './components/AppInfo';
import { SearchPanel } from './components/SearchPanel';
import { AppFilter } from './components/AppFilter';
import { EmployeesList } from './components/EmployeesList';
import { EmployeesAddForm } from './components/EmployeesAddForm';

function App() {
  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
