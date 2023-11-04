import { ITempWatchedData } from '../../Types/types-for-data';
import styles from './Summary.module.scss';

interface SummaryProps { 
  watched: ITempWatchedData[];
  avgImdbRating: number;
  avgUserRating: number;
  avgRuntime: number;
}

export function WatchedSummary({watched, avgImdbRating, avgUserRating, avgRuntime}:SummaryProps) {
  return ( 
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  )
}