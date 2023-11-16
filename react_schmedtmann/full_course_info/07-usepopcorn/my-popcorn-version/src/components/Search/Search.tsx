import { useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';
import { useKey } from '../../hooks/useKey';

interface SearchProps { 
  query: string;
  setQuery: (query: string) => void;
}

export const Search = ({ query, setQuery}: SearchProps) => {

  const inputEl = useRef<HTMLInputElement>(null); 

  useKey('Enter', (e: KeyboardEvent) => {
    if(e.code !== 'Enter' || document.activeElement === inputEl.current) return;  //когда эл. уже в фокусе и нажат не Энтер то очистка поля и повторная фокусировка не происходит
    if(inputEl.current)inputEl.current.focus();
    setQuery('');//очищает поле ввода
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

