import { useState} from 'react';
import './App.scss';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { AppHeader } from './components/AppHeader/AppHeader';
import { RandomChar } from './components/RandomChar/RandomChar';
import { CharList } from './components/CharList/CharList';
import { CharInfo } from './components/CharInfo/CharInfo';
import { ComicsList } from './components/ComicsList/ComicsList';
import { AppBanner } from './components/AppBanner/AppBanner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import Train from './components/forTraining/Train';
import { FormTrain } from './components/forTraining/FormTrain/FormTrain';


import MainContent from './components/pages/MainContent';
import SecondPage from './components/pages/SecondPage';
import NoMatch from './components/pages/NoMatch';


function App ()  {

return (

    // <Train/>
    // <FormTrain/>

    <Router>
      <div className="app">
        <AppHeader/>
        <main>
          <Routes>
            <Route path="/" element={<MainContent/>} />
            <Route path="/comics" element={<SecondPage/>} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
      </div>
    </Router>
    )
}

export default App;
