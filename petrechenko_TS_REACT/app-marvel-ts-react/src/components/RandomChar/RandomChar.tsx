import { Component } from 'react';

import styles from './RandomChar.module.scss';
import MarvelService from '../../services/MarvelService';

import mjolnir from '../../resources/img/mjolnir.png';
import Spinner from '../Spinner/Spinner';
import { Error } from '../Error/Error';

interface IChar {
    char: {
        name: string;
        description: string;
        thumbnail: string;
        homepage: string;
        wiki: string;
    }
}

const View = ({char}: IChar) => {

    const {name, description, thumbnail, homepage, wiki} = char;

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



export class RandomChar extends Component {

    state = {
        char: {
            name:  '',
            description: '',
            thumbnail: '',
            homepage: '',
            wiki: '',
        },
        loading: true,
        error: false,
    }

    marvelService = new MarvelService();
    
    componentWillMount(): void {
        this.updateChar();
    }

    updateChar = () => { 
        this.setState({loading: true});
        const random: number = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        const id: string = `${random}`;
        this.marvelService.getCharacter(id)
        .then((res: any) => {
            this.setState({char: res, loading: false, error: false});
        })
        .catch(this.onError);
    }

    onError = () => {
        this.setState({loading: false, error: true})
    }

    
    render() {
        const { char, loading, error} = this.state;
        const errorMessage = error ? <Error/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(error || loading) ? <View char={char}/> : null;

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
                    onClick={this.updateChar}
                    >
                        <div className={styles.inner}>try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className={styles.randomchar__decoration}/>
                </div>
            </div>
        );
    }
  
}
  
