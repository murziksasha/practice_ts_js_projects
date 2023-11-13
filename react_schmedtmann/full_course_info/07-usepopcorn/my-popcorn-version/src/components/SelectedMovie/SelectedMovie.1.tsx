import { useEffect, useState } from 'react';
import { loadMovieById } from '../LoadMovie/LoadMovie';
import { ITempWatchedData } from '../../Types/types-for-data';
import { StarRating } from '../StarRating';
import { SelectedMovieProps } from './SelectedMovie';

export const SelectedMovie = ({
  selectedId,
  hadleCloseMovie,
}: SelectedMovieProps) => {
  const [movie, setMovie] = useState<ITempWatchedData | null>(null);

  useEffect(() => {
    const fetchIdData = async () => {
      // setIsError('');
      // setIsLoading(true);
      try {
        const movieById = await loadMovieById(selectedId);
        setMovie(movieById);
        console.log(movie);
        // setWatched(newMovies);
      } catch (error) {
        // Handle any specific error or set default state
        console.error('Error fetching movies:', error);
        // setIsError(
        //   `Sorry, something wrong: ${error}, please reload the page...`
        // );
        // setMovies([]); // Set an empty array or default value for movies
      } finally {
        // setIsLoading(false);
      }
    };

    fetchIdData();
  }, [selectedId]);

  return (
    <div className='details'>
      <header>
        <button className='btn-back' onClick={hadleCloseMovie}>
          &larr;
        </button>
        <img src={movie?.Poster} alt={movie?.Title} />
        <div className='details-overview'>
          <h2>{movie?.Title}</h2>
          <p>
            {movie?.Released} &bull; {`${movie?.Runtime}`}
          </p>
          <p>{movie?.Genre}</p>
          <p>
            <span>⭐</span>
            {movie?.imdbRating} IMDb rating
          </p>
        </div>
      </header>
      <section>
        <StarRating />
        <p>
          <em>{movie?.Plot}</em>
        </p>
        <p>Starring {movie?.Actors}</p>
        <p>Directed by {movie?.Director}</p>
      </section>
    </div>
  );
};
