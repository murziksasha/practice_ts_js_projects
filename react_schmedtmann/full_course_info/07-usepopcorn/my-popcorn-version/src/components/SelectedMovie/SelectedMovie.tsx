import {useEffect, useState } from 'react';
import { loadMovieById } from '../LoadMovie/LoadMovie';
import { ITempWatchedData } from '../../Types/types-for-data';
import { StarRating } from '../StarRating';
import { Loader } from '../Loader';

export interface SelectedMovieProps { 
  selectedId: string;
  hadleCloseMovie: () => void;
  handleAddWathed: (movie: ITempWatchedData | null) => void;
  watched: ITempWatchedData[];
}

export const SelectedMovie = ({selectedId, hadleCloseMovie, handleAddWathed, watched}: SelectedMovieProps) => {

  const [movie, setMovie] = useState<ITempWatchedData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userRating, setUserRating] = useState<number>(0);

  useEffect(() => {
    const fetchIdData = async () => {
      // setIsError('');
      setIsLoading(true);
      try {
        const movieById = await loadMovieById(selectedId);
        setMovie(movieById);
        // setWatched(newMovies);
      } catch (error) {
        // Handle any specific error or set default state
        console.error('Error fetching movies:', error);
        // setIsError(
        //   `Sorry, something wrong: ${error}, please reload the page...`
        // );
        // setMovies([]); // Set an empty array or default value for movies
      } finally {
        setIsLoading(false);
      }
    };

    fetchIdData();
  }, [selectedId]);

  useEffect(() => {
    if(!movie?.Title) return;
    document.title = `${movie?.Title}`;
    return (function() {
      document.title = 'usePopcorn'
    });
  },[movie?.Title]);

  useEffect(() => {
    function onKeyPressEscClose(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        hadleCloseMovie();
      }
      console.log(e.key);
    }
  
    document.addEventListener('keydown', onKeyPressEscClose as EventListener);
  
    return function () {
      document.removeEventListener('keydown', onKeyPressEscClose as EventListener);
    };
  }, []);

  const isWatched = watched.some((movie) => movie.imdbID === selectedId);
  const watchedUserRating = watched.find(movie => movie.imdbID === selectedId)?.userRating;

  function handleAdd() {
    if(!movie) return;
    const newMovie: ITempWatchedData = {
      ...movie,
      userRating: userRating
    }
    handleAddWathed(newMovie);
  }

  function handleUserRating(rating: number) {
    setUserRating(rating);
  }





  return (
    <div className="details">
      {isLoading ? <Loader/> : 
      <>
      <header >
        <button className="btn-back" onClick={hadleCloseMovie}>&larr;</button>
        <img src={movie?.Poster} alt={movie?.Title} />
        <div className="details-overview">
         <h2>{movie?.Title}</h2>
         <p>{movie?.Released} &bull; {`${movie?.Runtime}`}</p>
         <p>{movie?.Genre}</p>
         <p><span>⭐</span>{movie?.imdbRating} IMDb rating</p>
        </div>
      </header>
      <section>
        <div>
      {!isWatched ? 
          <>
            <StarRating maxRatingStars={10} size={25} onSetRating={handleUserRating}/>
        {userRating > 0 &&         <button className="btn-add"
          onClick={handleAdd}
        >+ Add to List</button>}
        </> : ( <p>You`ve already rated this movie <span> - {watchedUserRating}</span><span>⭐</span></p>)
        } 
        </div>
        <p><em>{movie?.Plot}</em></p>
        <p>Starring {movie?.Actors}</p>
        <p>Directed by {movie?.Director}</p>
      </section>
    </>
    }
  </div>
  );
}
