
export interface ITempMovieData {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface ITempWatchedData extends ITempMovieData {
  runtime: number;
  imdbRating: number;
  userRating: number;
}