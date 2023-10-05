import styles from './CharList.module.scss';
import {useMarvelService} from '../../services/MarvelService';
import { useEffect, useState } from 'react';
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
    const [newItemLoading, setNewItemLoading] = useState<boolean>(false);
    const [offset, setOffset] = useState<number>(52);
  
    const {loading, error, getAllCharacters} = useMarvelService();


    const onRequest = () => {
      setNewItemLoading(true);
      getAllCharacters(offset)
        .then((res) => {
          setChar([...res])
          setOffset((prevOffset) => prevOffset + 9);
          setNewItemLoading(false);
        });
    };
  
    useEffect(() => {
      onRequest();
    }, []);
  
  
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
          onClick={onRequest}
        >
          <div className={styles.inner}>load more</div>
        </button>
      </div>
    );
  }