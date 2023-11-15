import { useEffect, useState } from 'react';
import {
  ITempMovieData,
  ITempWatchedData,
} from '../../Types/types-for-data';
import './App.css';
import { Navbar } from '../Navbar';
import { Main } from '../Main';
import { Search } from '../Search';
import { NumResults } from '../NumResults';
import { WatchedBox } from '../WatchedBox';
import { loadMovie } from '../LoadMovie/LoadMovie';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import { SelectedMovie } from '../SelectedMovie';
import { ListBox } from '../ListBox';

// const tempMovieData: ITempMovieData[] = [
//   {
//     imdbID: 'tt1375666',
//     Title: 'Inception',
//     Year: '2010',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
//   },
//   {
//     imdbID: 'tt0133093',
//     Title: 'The Matrix',
//     Year: '1999',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
//   },
//   {
//     imdbID: 'tt6751668',
//     Title: 'Parasite',
//     Year: '2019',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
//   },
// ];

// const tempWatchedData: ITempWatchedData[] = [
//   {
//     imdbID: 'tt1375666',
//     Title: 'Inception',
//     Year: '2010',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
//     Runtime: '148',
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: 'tt0088763',
//     Title: 'Back to the Future',
//     Year: '1985',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
//     Runtime: '116',
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

const average = (arr: number[]) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function App() {
  const [movies, setMovies] =
    useState<ITempMovieData[]>([]);
  const [watched, setWatched] =
    useState<ITempWatchedData[]>(() =>{
      const watchedInLocalStore = localStorage.getItem('watched') 
      return watchedInLocalStore ? JSON.parse(watchedInLocalStore) : [];
    });
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [isError, setIsError] = useState('');
  const [query, setQuery] = useState<string>('love');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsError('');
      setIsLoading(true);
      try {
        const newMovies = await loadMovie(query);
        setMovies(newMovies);
      } catch (error) {
        // Handle any specific error or set default state
        console.error('Error fetching movies:', error);
        setIsError(
          `Sorry, something wrong: ${error}, please reload the page...`
        );
        setMovies([]); // Set an empty array or default value for movies
      } finally {
        setIsLoading(false);
      }
    };



    if (!query.length) {
      setMovies([]);
      setIsError('');
      return;
    }

    fetchData();
  }, [query]);

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched));
  }, [watched]);

  function handleSelectMovie(id: string) {
    setSelectedId(selectedId => (id === selectedId ? null: id));
  }

  function handleDeleteWatched(id: string) {
    setWatched(watched => watched.filter(movie => movie.imdbID !== id))
  }

  function hadleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWathed(movie: ITempWatchedData | null) {
    if(movie) setWatched(watched => [...watched, movie]);
    setSelectedId(null);
  }









  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        {isLoading && <Loader />}
        {!isLoading && !isError && (
          <ListBox
            movies={movies}
            handleSelectMovie={handleSelectMovie}
          />
        )}
        {isError && <ErrorMessage message={isError} />}
        {selectedId ? (
          <SelectedMovie 
            selectedId={selectedId} 
            hadleCloseMovie={hadleCloseMovie}
            handleAddWathed={handleAddWathed}
            watched={watched}
          />
        ) : (
          watched && <WatchedBox
            average={average} 
            watched={watched}
            handleDeleteWatched={handleDeleteWatched}
          />
        )}
      </Main>
    </>
  );
}

export default App;
