import styles from './CharList.module.scss';
import MarvelService from '../../services/MarvelService';
import { Component, useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import { Error } from '../Error/Error';


interface IChars {
    id: string;
    name: string;
    thumbnail: string;
  }
  
  interface CharListProps {
    onCharSelected: (id: number) => void;
  }

  interface ViewProps {
    char: IChars;
    onCharSelected: (id: number) => void;
  }


  function View({ char, onCharSelected }: ViewProps) {
    return (
      <li
        className={styles.char__item}
        key={char.id}
        onClick={() => onCharSelected(Number(char.id))}
      >
        <img
          src={char.thumbnail}
          alt={char.name}
          style={{ maxWidth: '118%', objectFit: 'cover', height: '152px' }}
        />
        <div className={styles.char__name}>{char.name}</div>
      </li>
    );
  }
  
  export function CharList({ onCharSelected }: CharListProps) {
    const [char, setChar] = useState<IChars[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [newItemLoading, setNewItemLoading] = useState<boolean>(false);
    const [offset, setOffset] = useState<number>(52);
  
    const marvelService = new MarvelService();

    const onRequest = () => {
      setNewItemLoading(true);
      marvelService
        .getAllCharacters(offset)
        .then((res: any) => {
        if(char.length === 0){
            setChar([...res]);
        } 
        if(char.length >= 9) {
            console.log('i am there')
            setChar((prevChar) => [...prevChar, ...res]);
        }
          setOffset((prevOffset) => prevOffset + 9); // Increase offset by 9
          setLoading(false);
          setNewItemLoading(false);
        })
        .catch(onError);
    };
  
    useEffect(() => {
      onRequest();
    }, []);
  
    
    const onError = () => {
      setLoading(false);
      setError(true);
    };
  
    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = char.map((item: IChars) => (
      <View key={item.id} char={item} onCharSelected={onCharSelected} />
    ));
  
    return (
      <div className={styles.char__list}>
        <ul className={styles.char__grid}>
          {spinner}
          {errorMessage}
          {content}
        </ul>
        <button
          className={`${styles.button} ${styles.button__main} ${styles.button__long}`}
          disabled={newItemLoading}
          onClick={() => onRequest()}
        >
          <div className={styles.inner}>load more</div>
        </button>
      </div>
    );
  }