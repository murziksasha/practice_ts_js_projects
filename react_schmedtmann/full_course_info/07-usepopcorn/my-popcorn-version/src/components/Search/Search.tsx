import { useState } from 'react';
import styles from './Search.module.scss';

interface SearchProps { 
  query: string;
  setQuery: (query: string) => void;
}

export const Search = ({ query, setQuery}: SearchProps) => {

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

