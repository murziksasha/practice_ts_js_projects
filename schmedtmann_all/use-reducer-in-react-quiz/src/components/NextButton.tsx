import { Action } from "../App";


interface PropsNextButton {
  dispatch: React.Dispatch<Action>;
  answer: number | null;
}

export default function NextButton({answer, dispatch}: PropsNextButton) {

  if(answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({type: 'nextQuestion'})}
    >nextQuestion</button>
  )
}
