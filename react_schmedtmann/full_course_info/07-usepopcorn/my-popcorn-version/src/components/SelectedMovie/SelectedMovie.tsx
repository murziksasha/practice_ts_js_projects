import styles from './SelectedMovie.module.scss';

interface SelectedMovieProps { 
  selectedId: string
}

export const SelectedMovie = ({selectedId}: SelectedMovieProps) => (
  <div className="details">
    {selectedId}
  </div>
);
