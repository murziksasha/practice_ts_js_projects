import { useRef } from 'react';

import styles from './Search.module.scss';
import { ReactComponent as SearchIcon} from 'assets/icon-search.svg';

import { Button } from 'components/Button';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
 }

 type FormFields = {
  username: HTMLInputElement;
 }

export const Search = ({hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const hadleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();

    const text = event.currentTarget.username.value;

    if(text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }


    // with ref variant
    // const text = searchRef.current ? searchRef.current?.value : '';
    // if(text) {
    //   onSubmit(text);
    //   if(searchRef.current) searchRef.current.value = '';
    // }
  };

  return (
    <form onSubmit={hadleSubmit}  autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon/>
        </label>
        <input type="text" 
          // ref={searchRef}
          className={styles.textField}
          id='search'
          name='username'
          placeholder='Search GitHub username...'
          
        />
        {hasError && (
          <div className={styles.error}>
            No Result
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  );
  
}