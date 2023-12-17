import { useQuestions } from "../utils/context"


export default function Progress() {
  const {numQuestions, index, answer, points, maxPossiblePoints} = useQuestions();
  return (
    <header className='progress'>
      <progress max={numQuestions} 
      value={index + Number(answer !== null)}
      ></progress>
      <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
      <p><strong>{points}</strong> / {maxPossiblePoints}</p>
    </header>
  )
}
