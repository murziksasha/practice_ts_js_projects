import { ITempMovieData } from '../../Types/types-for-data';
import { Movie } from '../Movie/Movie';
import styles from './MovieList.module.scss';

interface MovieListProps {
  movies: ITempMovieData[];
  handleSelectMovie: (id: string) => void;
 }

export const MovieList = ({movies, handleSelectMovie }: MovieListProps) => {

  return  (
    <ul className="list">
    {movies?.map((movie) => (
      <Movie movie={movie} key={movie.imdbID} handleSelectMovie={handleSelectMovie}/>
    ))}
  </ul>
  );
}
