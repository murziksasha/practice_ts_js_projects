import { ITempMovieData } from '../../Types/types-for-data';
import styles from './NumResults.module.scss';

interface NumResultsProps {
  movies: ITempMovieData[];
 }

export const NumResults = ({movies }: NumResultsProps) => (
  <p className="num-results">
    Found <strong>{movies.length}</strong> results
  </p>
);
