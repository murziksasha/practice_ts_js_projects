import { useEffect } from "react";
import { useQuestions } from "../utils/context";



function formatTime(totalSeconds: number): string {
  if (totalSeconds < 0) return '00:00';

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
}

export default function Timer() {
  const {secondsRemaining, dispatch} = useQuestions();

  function timeTofinish() {
    dispatch({type: 'tick'})
  }

  useEffect(() => {

    const timer = setInterval(timeTofinish, 1000);

    return () => clearInterval(timer);
  }, [dispatch])

  return (
    <div className="timer">{formatTime(secondsRemaining)}</div>
  )
}
