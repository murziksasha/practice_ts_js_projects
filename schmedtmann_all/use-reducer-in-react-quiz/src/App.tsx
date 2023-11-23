import React, { useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import { Main } from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';

export interface IDataQuestion {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

export interface Action {
  type: string;
  payload?: any;
}

interface State {
  questions: IDataQuestion[];
  status: 'loading' | 'error' | 'ready' | 'active' | 'finished';
  index: number;
  answer: number | null;
  points: number;
}

const initialState: State = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0
};


function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload, 
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      }
    case 'start':
      return {
        ...state,
        status: 'active'
      }
    case 'newAnswer':
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question?.correctOption ? 
        state.points + (question?.points ?? 0) : state.points,
      }
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null
      };
    default:
      return state;
  }
}

function App() {
  const [{questions, status, index, answer}, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  useEffect(() => {
    fetch('http://localhost:9000/questions')
      .then((res) => res.json())
      .then((data: IDataQuestion[]) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => {
        console.error(`Something went wrong: ${err}`)
        return dispatch({type: 'dataFailed'})
      }); 
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader/>}
        {status === 'error' && <Error/>}
        {status === 'ready' && 
        <StartScreen 
          numQuestions={numQuestions}
          dispatch={dispatch}
          />}
        {status === 'active' && (
        <><Question 
        currentQuestion={questions[index]} 
        dispatch={dispatch}
        answer={answer}
        />
        <NextButton dispatch={dispatch} answer={answer}/>
        </>
        )}

      </Main>
    </div>
  );
}

export default App;
