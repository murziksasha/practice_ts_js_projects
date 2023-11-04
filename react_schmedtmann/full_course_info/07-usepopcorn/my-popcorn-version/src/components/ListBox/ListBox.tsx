import { useState } from 'react';
import { ITempMovieData } from '../../Types/types-for-data';
import styles from './ListBox.module.scss';
import { MovieList } from '../MovieList';

interface ListBoxProps {
  movies: ITempMovieData[];
 }

export const ListBox = ({movies }: ListBoxProps) => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen1((open) => !open)}
        >
          {isOpen1 ? "–" : "+"}
        </button>
        {isOpen1 && (
          <MovieList movies={movies}/>
        )}
      </div>
    );
  } 
