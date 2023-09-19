import styles from './CharList.module.scss';


import abyss from '../../resources/img/abyss.jpg';


interface CharListProps { }

export const CharList = ({ }: CharListProps) =>{
  return (
      <div className={styles.char__list}>
          <ul className={styles.char__grid}>
              <li className={styles.char__item}>
                  <img src={abyss} alt="abyss"/>
                  <div className={styles.char__name}>Abyss</div>
              </li>
              <li className={`${styles.char__item} ${styles.char__item_selected}`}>
                  <img src={abyss} alt="abyss"/>
                  <div className={styles.char__name}>Abyss</div>
              </li>
              <li className={styles.char__item}>
                  <img src={abyss} alt="abyss"/>
                  <div className={styles.char__name}>Abyss</div>
              </li>
              <li className={styles.char__item}>
                  <img src={abyss} alt="abyss"/>
                  <div className={styles.char__name}>Abyss</div>
              </li>
              <li className={styles.char__item}>
                  <img src={abyss} alt="abyss"/>
                  <div className={styles.char__name}>Abyss</div>
              </li>
              <li className={styles.char__item}>
                  <img src={abyss} alt="abyss"/>
                  <div className={styles.char__name}>Abyss</div>
              </li>
              <li className={styles.char__item}>
                  <img src={abyss} alt="abyss"/>
                  <div className={styles.char__name}>Abyss</div>
              </li>
              <li className={styles.char__item}>
                  <img src={abyss} alt="abyss"/>
                  <div className={styles.char__name}>Abyss</div>
              </li>
              <li className={styles.char__item}>
                  <img src={abyss} alt="abyss"/>
                  <div className={styles.char__name}>Abyss</div>
              </li>
          </ul>
          <button className={`${styles.button} ${styles.button__main} ${styles.button__long}`}>
              <div className={styles.inner}>load more</div>
          </button>
      </div>
  )
}
