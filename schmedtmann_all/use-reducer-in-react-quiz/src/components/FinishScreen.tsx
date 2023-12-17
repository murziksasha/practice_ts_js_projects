import { useQuestions } from "../utils/context";




export default function FinishScreen() {
  const {points, maxPossiblePoints, highscore, dispatch} = useQuestions();
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if(percentage === 100) emoji = '💯';
  if(percentage >= 80 && percentage < 100) emoji = '🥈';
  if(percentage < 80 && percentage >= 50) emoji = '🌗';
  if(percentage < 50 && percentage >= 0) emoji = '🫢';
  if(percentage === 0) emoji = '👎🏾👎🏾👎🏾';

  function handleClick() {
    dispatch({type: 'restart'})
  }


  return (
    <>
      <p className='result'>
        <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>{`Highscore: ${highscore} points`}</p>
      <button className='btn btn-ui'
        onClick={handleClick}>
        Restart
      </button>
    </>

  )
}
