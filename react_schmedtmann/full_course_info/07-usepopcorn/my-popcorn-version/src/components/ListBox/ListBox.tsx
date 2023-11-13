import { useState } from 'react';
import { ITempMovieData } from '../../Types/types-for-data';
import { MovieList } from '../MovieList';

interface ListBoxProps {
  movies: ITempMovieData[];
  handleSelectMovie: (id: string) => void;
}

export const ListBox = ({movies, handleSelectMovie }: ListBoxProps) => {
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
          <MovieList movies={movies} handleSelectMovie={handleSelectMovie}/>
        )}
      </div>
    );
  } 
