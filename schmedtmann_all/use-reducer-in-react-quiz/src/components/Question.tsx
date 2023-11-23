
import React from 'react';
import { Action, IDataQuestion } from '../App';
import VariantsOfAnswers from './VariantsOfAnswers';


interface PropsQuestion {
  currentQuestion: IDataQuestion;
  dispatch: React.Dispatch<Action>;
  answer: number | null;
}

export default function Question({currentQuestion, dispatch, answer}: PropsQuestion) {

  return (
    <div className='options'>
      <h4>{currentQuestion.question}</h4>
      <VariantsOfAnswers 
        currentQuestion={currentQuestion}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  )
}
