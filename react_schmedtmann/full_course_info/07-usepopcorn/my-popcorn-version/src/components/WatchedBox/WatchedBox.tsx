import { useState } from 'react';
import styles from './WatchedBox.module.scss';
import { ITempWatchedData } from '../../Types/types-for-data';
import { WatchedSummary } from '../Summary';
import { WatchedMovie } from '../WatchedMovie';

interface WatchedBoxProps {
  average: (arr: number[]) => number;
  watched: ITempWatchedData[];
 }

export const WatchedBox = ({average, watched }: WatchedBoxProps) => {

  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary 
            watched={watched}
            avgImdbRating={avgImdbRating}
            avgUserRating={avgUserRating}
            avgRuntime={avgRuntime}
          />

          <ul className="list">
            {watched.map((movie) => (
              <WatchedMovie movie={movie} key={movie.imdbID}/>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}


