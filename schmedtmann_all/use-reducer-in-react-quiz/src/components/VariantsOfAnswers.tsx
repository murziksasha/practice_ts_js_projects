

import { useQuestions } from '../utils/context';


export default function VariantsOfAnswers() {

  const {answer, currentQuestion, dispatch} = useQuestions();

  const hasAnswered = answer !== null;

  function handleClick(index: number) {
    dispatch({type: 'newAnswer', payload: index})
  }

  return (
    <>
      {currentQuestion?.options.map((option, index) => (
      <button className={`btn btn-option 
        ${ index === answer ? 'answer': ''}
        ${hasAnswered ? index === currentQuestion.correctOption ? 'correct' : 'wrong' : ''}
      `}
      disabled={hasAnswered}
      key={option}
      onClick={() => handleClick(index)}
      >{option}
      </button>
    ))}
    </>
  )
}
