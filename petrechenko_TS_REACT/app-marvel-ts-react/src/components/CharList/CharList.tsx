import styles from './CharList.module.scss';
import MarvelService from '../../services/MarvelService';
import { Component } from 'react';
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

interface ViewProps extends CharListProps{
    char: IChars;
}



function View({char,  onCharSelected}: ViewProps) {
    return (
    <li 
    className={styles.char__item} 
    key={char.id}
    onClick={() => onCharSelected(Number(char.id))}
    >
        <img src={char.thumbnail} alt={char.name}
        style={{maxWidth: '118%', objectFit: 'cover', height: '152px'}}
        />
        <div className={styles.char__name}>{char.name}</div>
    </li>
    )
}


export class CharList extends Component<CharListProps> {

    state = {
        char: [],
        loading: true,
        error: false,
    }

    marvelService = new MarvelService();
    
    componentWillMount(): void {
        this.updateChar();
    }

    updateChar = () => { 
        this.setState({loading: true});
        this.marvelService.getAllCharacters()
        .then((res: any) => {
            this.setState({char: res, loading: false});
        })
        .catch(this.onError);
    }

    onError = () => {
        this.setState({loading: false, error: true})
    }

    render(){
        const { char, loading, error} = this.state;
        const errorMessage = error ? <Error/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = char && char.map((item: IChars) => (
                <View key={item.id} char={item} onCharSelected={this.props.onCharSelected}/>
            ));
        return (
            <div className={styles.char__list}>
                <ul className={styles.char__grid}>
                    {spinner}
                    {errorMessage}
                    {content}
                </ul>
                <button className={`${styles.button} ${styles.button__main} ${styles.button__long}`}>
                    <div className={styles.inner}>load more</div>
                </button>
            </div>
        )
    }
}
