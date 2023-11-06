import { ITempMovieData } from '../../Types/types-for-data';
import { Movie } from '../Movie/Movie';
import styles from './MovieList.module.scss';

interface MovieListProps {
  movies: ITempMovieData[];
 }

export const MovieList = ({movies }: MovieListProps) => {

  return  (
    <ul className="list">
    {movies?.map((movie) => (
      <Movie movie={movie} key={movie.imdbID}/>
    ))}
  </ul>
  );
}
