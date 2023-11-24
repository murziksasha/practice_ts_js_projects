import { Action } from "../App";


interface PropsNextButton {
  dispatch: React.Dispatch<Action>;
  answer: number | null;
  index: number;
  numQuestions: number;
}

export default function NextButton({answer, index, numQuestions, dispatch}: PropsNextButton) {

  if(answer === null) return null;

  if(index < numQuestions -1) return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({type: 'nextQuestion'})}
    >nextQuestion</button>
  )

  if(index === numQuestions -1) return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({type: 'finish'})}
    >Finish</button>
  )
};
