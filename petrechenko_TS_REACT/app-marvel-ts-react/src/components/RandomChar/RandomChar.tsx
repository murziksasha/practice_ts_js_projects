import { useEffect, useState } from 'react';

import styles from './RandomChar.module.scss';
import {useMarvelService, IUseHttpWithMarvelService} from '../../services/MarvelService';

import mjolnir from '../../resources/img/mjolnir.png';
import Spinner from '../Spinner/Spinner';
import { Error } from '../Error/Error';

interface IChar {
        name: string;
        description: string;
        thumbnail: string;
        homepage: string;
        wiki: string;
}

const View = ({name, description, thumbnail, homepage, wiki}: IChar) => {


    return (
        <div className={styles.randomchar__block}>
        <img 
        src={thumbnail} 
        alt="Random character"
        className={styles.randomchar__img}
        style={{maxWidth: '100%', objectFit: 'cover' ,height: '160px'}}
         />
        <div className={styles.randomchar__info}>
            <p className={styles.randomchar__name}>{name}</p>
            <p className={styles.randomchar__descr}>
                {description && description.length > 0 ? description : 'Sorry, no description found...'}
            </p>
            <div className={styles.randomchar__btns}>
                <a href={homepage} className={`${styles.button} ${styles.button__main}`} target='_blank'>
                    <div className={styles.inner}>homepage</div>
                </a>
                <a href={wiki} className={`${styles.button} ${styles.button__secondary}`} target='_blank'>
                    <div className={styles.inner}>Wiki</div>
                </a>
            </div>
        </div>
    </div>
    )
}



export function RandomChar () {
    let [char, setChar] = useState<IChar>({
        name:  '',
        description: '',
        thumbnail: '',
        homepage: '',
        wiki: '',
    });


    
    const {loading, error, getCharacter, clearError} = useMarvelService();


    useEffect(() => {
        updateChar();
    }, []);


    const updateChar = () => { 
        clearError();
        const random: number = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        const id: string = `${random}`;
        getCharacter(id)
        .then((res: any) => {
            setChar(char = res);
        });
    }

        const errorMessage = error ? <Error/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(error || loading) ? <View {...char}/> : null;

    return (
        <div className={styles.randomchar}>
            {content}
            {spinner}
            {errorMessage}
            <div className={styles.randomchar__static}>
                <p className={styles.randomchar__title}>
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className={styles.randomchar__title}>
                    Or choose another one
                </p>
                <button className={`${styles.button} ${styles.button__main}`}
                onClick={updateChar}
                >
                    <div className={styles.inner}>try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className={styles.randomchar__decoration}/>
            </div>
        </div>
    );
  
}
  
