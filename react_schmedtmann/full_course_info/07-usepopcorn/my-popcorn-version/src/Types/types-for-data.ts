
export interface ITempMovieData {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface ITempWatchedData extends ITempMovieData {
  Runtime: string;
  imdbRating: number;
  userRating: number;
  Released?: string;
  Plot?: string;
  Genre?: string;
  Actors?: string;
  Director?: string;

}