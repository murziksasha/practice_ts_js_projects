
import React from 'react'
import { Action } from '../App';

interface PropsStartScreen {
  numQuestions: number;
  dispatch: React.Dispatch<Action>;
}

export default function StartScreen({numQuestions, dispatch}: PropsStartScreen) {
  return (
    <div className='start'>
      <h2>Welcome to the REACT QUIZ</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button 
        className='btn btn-ui'
        onClick={() => dispatch({type:'start'})}
        >Let's start</button>
    </div>
  )
}
