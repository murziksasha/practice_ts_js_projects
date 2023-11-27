import { useEffect } from "react"
import { Action } from "../App";

interface IPropsTimer {
  secondsRemaining: number;
  dispatch: React.Dispatch<Action>;
}

function formatTime(totalSeconds: number): string {
  if (totalSeconds < 0) return '00:00';

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
}

export default function Timer({secondsRemaining, dispatch}: IPropsTimer) {

  useEffect(() => {

    const timer = setInterval(() => dispatch({type: 'tick'}), 1000);

    return () => clearInterval(timer);
  }, [dispatch])

  return (
    <div className="timer">{formatTime(secondsRemaining)}</div>
  )
}
