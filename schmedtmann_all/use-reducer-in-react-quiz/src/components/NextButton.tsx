import { useQuestions } from "../utils/context";




export default function NextButton() {
  const {answer, index, numQuestions, dispatch} = useQuestions();

  if(answer === null) return null;

  function handleClick() {
    dispatch({type: 'nextQuestion'})
  }

  function handleFinish() {
    dispatch({type: 'finish'})
  }

  if(index < numQuestions -1) return (
    <button
      className="btn btn-ui"
      onClick={handleClick}
    >nextQuestion</button>
  )

  if(index === numQuestions -1) return (
    <button
      className="btn btn-ui"
      onClick={handleFinish}
    >Finish</button>
  )
};
