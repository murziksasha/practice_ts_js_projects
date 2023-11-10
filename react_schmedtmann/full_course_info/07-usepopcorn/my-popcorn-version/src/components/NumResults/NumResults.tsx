import { ITempMovieData } from '../../Types/types-for-data';
import styles from './NumResults.module.scss';

interface NumResultsProps {
  movies: ITempMovieData[] | undefined; 
}

export const NumResults = ({ movies }: NumResultsProps) => (
  <p className="num-results">
    Found <strong>{movies && movies.length ? movies.length : 0}</strong> results
  </p>
);