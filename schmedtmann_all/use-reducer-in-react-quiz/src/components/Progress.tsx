
interface IPropsProgress {
  index: number;
  numQuestions: number;
  points: number;
  maxPossiblePoints: number;
}

export default function Progress({index, numQuestions, points, maxPossiblePoints}: IPropsProgress) {
  return (
    <header className='progress'>
      <progress max={numQuestions} value={1}></progress>
      <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
      <p><strong>{points}</strong> / {maxPossiblePoints}</p>
    </header>
  )
}
