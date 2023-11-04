import { ITempWatchedData } from '../../Types/types-for-data';
import styles from './WatchedMovie.module.scss';

interface WatchedMovieProps {
  movie: ITempWatchedData;
 }

export const WatchedMovie = ({ movie}: WatchedMovieProps) => (
  <li>
    <img src={movie.Poster} alt={`${movie.Title} poster`} />
    <h3>{movie.Title}</h3>
    <div>
      <p>
        <span>⭐️</span>
        <span>{movie.imdbRating}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{movie.userRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{movie.runtime} min</span>
      </p>
    </div>
  </li>
);
