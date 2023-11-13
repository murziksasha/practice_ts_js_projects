import { ITempMovieData } from '../../Types/types-for-data';
import styles from './Movie.module.scss';

interface MovieProps { 
  movie: ITempMovieData;
  handleSelectMovie: (id: string) => void;
}

export const Movie = ({movie, handleSelectMovie }: MovieProps) => (
  <li onClick={() => handleSelectMovie(movie.imdbID)}>
    <img src={movie.Poster} alt={`${movie.Title} poster`} />
    <h3>{movie.Title}</h3>
    <div>
      <p>
        <span>🗓</span>
        <span>{movie.Year}</span>
      </p>
    </div>
  </li>
);
