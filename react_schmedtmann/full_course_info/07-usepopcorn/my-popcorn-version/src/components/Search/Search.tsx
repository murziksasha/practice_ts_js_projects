import { useState } from 'react';
import styles from './Search.module.scss';

interface SearchProps { }

export const Search = ({ }: SearchProps) => {
  const [query, setQuery] = useState("");

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

