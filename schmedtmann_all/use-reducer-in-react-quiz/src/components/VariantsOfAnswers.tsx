

import React from 'react'
import { Action, IDataQuestion } from '../App';

interface PropsVariantsOfAnswers {
  currentQuestion: IDataQuestion;
  dispatch: React.Dispatch<Action>;
  answer: number | null;
}

export default function VariantsOfAnswers({currentQuestion, answer, dispatch}: PropsVariantsOfAnswers) {

  const hasAnswered = answer !== null;

  return (
    <>
      {currentQuestion.options.map((option, index) => (
      <button className={`btn btn-option 
        ${ index === answer ? 'answer': ''}
        ${hasAnswered ? index === currentQuestion.correctOption ? 'correct' : 'wrong' : ''}
      `}
      disabled={hasAnswered}
      key={option}
      onClick={() => dispatch({type:'newAnswer', payload: index})
    }
      >{option}
      </button>
    ))}
    </>
  )
}
