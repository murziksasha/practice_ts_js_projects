import { ITempWatchedData } from '../../Types/types-for-data';
import styles from './WatchedMovie.module.scss';

interface WatchedMovieProps {
  movie: ITempWatchedData;
  handleDeleteWatched: (id: string) => void;
 }

export const WatchedMovie = ({ movie, handleDeleteWatched}: WatchedMovieProps) => (
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
        <span>{movie.Runtime} min</span>
      </p>
      <button className="btn-delete" onClick={() => handleDeleteWatched(movie.imdbID)}>X</button>
    </div>
  </li>
);
