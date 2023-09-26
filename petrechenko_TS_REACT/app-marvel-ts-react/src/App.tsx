import {Component} from 'react';
import './App.scss';

import { AppHeader } from './components/AppHeader/AppHeader';
import { RandomChar } from './components/RandomChar/RandomChar';
import { CharList } from './components/CharList/CharList';
import { CharInfo } from './components/CharInfo/CharInfo';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';


import decoration from '../../app-marvel-ts-react/src/resources/img/vision.png';


class App extends Component {

    state = {
        selectedChar: '',
    }

    onCharSelected = (id: number) => {
        this.setState({
            selectedChar: id,
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <ErrorBoundary>
                        <RandomChar/>
                    </ErrorBoundary>
                    <div className="char__content">
                    <ErrorBoundary>
                        <CharList onCharSelected = {this.onCharSelected}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharInfo charId = {this.state.selectedChar}/>
                    </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;
