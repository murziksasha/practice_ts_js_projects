
import React from 'react'

interface IPropsFinishScreen {
  points: number;
  maxPossiblePoints: number;
  highscore: number;
}

export default function FinishScreen({points, maxPossiblePoints, highscore}: IPropsFinishScreen) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if(percentage === 100) emoji = '💯';
  if(percentage >= 80 && percentage < 100) emoji = '🥈';
  if(percentage < 80 && percentage >= 50) emoji = '🌗';
  if(percentage < 50 && percentage >= 0) emoji = '🫢';
  if(percentage === 0) emoji = '👎🏾👎🏾👎🏾';


  return (
    <>
      <p className='result'>
        <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>{`Highscore: ${highscore} points`}</p>
    </>

  )
}
