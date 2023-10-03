import {useEffect, useState} from 'react';

import styles from './CharInfo.module.scss';
import MarvelService from '../../services/MarvelService';
import { Error } from '../Error/Error';
import Spinner from '../Spinner/Spinner';
import { Skeleton } from '../Skeleton/Skeleton';


interface CharInfoProps { 
    charId: string | number;
}

interface IChar {
        name: string;
        description: string;
        thumbnail: string;
        homepage: string;
        wiki: string;
        comics: string[];
}

const View: React.FC<{ char: IChar }> = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = char;

    return (
        <>
            <div className={styles.char__basics}>
                <img src={thumbnail} alt={name} style={{objectFit: 'contain'}}/>
                <div>
                    <div className={styles.char__info_name}>{name}</div>
                    <div className={styles.char__btns}>
                        <a href={homepage} className={`${styles.button} ${styles.button__main}`} target='_blank'>
                            <div className={styles.inner}>homepage</div>
                        </a>
                        <a href={wiki} className={`${styles.button} ${styles.button__secondary}`} target='_blank'>
                            <div className={styles.inner}>Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.char__descr}>
                {description.length > 0 ? description : 'Sorry, no description here...'}
            </div>
            <div className={styles.char__comics}>Comics:</div>
            <ul className={styles.char__comics_list}>
                {comics.length > 0 ? null : 'There is no comics with this character'}
                {comics.map((item: any, i) => {
                    if(i > 15) return;
                    return (
                      <li key ={i} className={styles.char__comics_item}>
                        {item.name}
                      </li>
                    )
                })
                }
            </ul>
        </>
    )
}

export function CharInfo ({charId}: CharInfoProps){
    let [char, setChar] = useState<IChar>({
            name:  '',
            description: '',
            thumbnail: '',
            homepage: '',
            wiki: '',
            comics: [],
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService();

    const updateChar = () => { 
        if(!charId) return;
        setLoading(true);
        marvelService.getCharacter(`${charId}`)
        .then((res: any) => {
            setChar(() => (char = res));
            setLoading(false);
            setError(false);
        })
        .catch(onError);
    }
    
    useEffect(updateChar, []);

    useEffect(() => {
        updateChar();
    }, [charId]);


    const onError = () => {
        setLoading(false);
        setError(true);
    }




    const skeleton = char.name || loading || error ? null : <Skeleton/>
    const errorMessage = error ? <Error/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(error || loading || !(char.name.length > 0)) ? (
    <View char={char}/> 
    ): null;
    return (
        <div className={styles.char__info}>
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}
