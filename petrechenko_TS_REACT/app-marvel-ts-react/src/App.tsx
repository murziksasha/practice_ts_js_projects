import { useState} from 'react';
import './App.scss';

import { AppHeader } from './components/AppHeader/AppHeader';
import { RandomChar } from './components/RandomChar/RandomChar';
import { CharList } from './components/CharList/CharList';
import { CharInfo } from './components/CharInfo/CharInfo';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';


import decoration from '../../app-marvel-ts-react/src/resources/img/vision.png';


import Train from './components/forTraining/Train';
import { FormTrain } from './components/forTraining/FormTrain/FormTrain';


function App ()  {

    const [selectedChar, setSelectedChar] = useState<number | string>('');


    const onCharSelected = (id: number) => {
        setSelectedChar(id);
    }
return (

    // <Train/>
    <FormTrain/>




    // <div className="app">
    //     <AppHeader/>
    //     <main>
    //         <ErrorBoundary>
    //             <RandomChar/>
    //         </ErrorBoundary>
    //         <div className="char__content">
    //         <ErrorBoundary>
    //             <CharList onCharSelected = {onCharSelected}/>
    //         </ErrorBoundary>
    //         <ErrorBoundary>
    //             <CharInfo charId = {selectedChar}/>
    //         </ErrorBoundary>
    //         </div>
    //         <img className="bg-decoration" src={decoration} alt="vision"/>
    //     </main>
    // </div>

)
}

export default App;
