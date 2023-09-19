import styles from './CharInfo.module.scss';

import thor from '../../resources/img/thor.jpeg';


interface CharInfoProps { }

export const CharInfo = ({ }: CharInfoProps) => {
  return (
      <div className={styles.char__info}>
          <div className={styles.char__basics}>
              <img src={thor} alt="abyss"/>
              <div>
                  <div className={styles.char__info_name}>thor</div>
                  <div className={styles.char__btns}>
                      <a href="#" className={`${styles.button} ${styles.button__main}`}>
                          <div className={styles.inner}>homepage</div>
                      </a>
                      <a href="#" className={`${styles.button} ${styles.button__secondary}`}>
                          <div className={styles.inner}>Wiki</div>
                      </a>
                  </div>
              </div>
          </div>
          <div className={styles.char__descr}>
              In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
          </div>
          <div className={styles.char__comics}>Comics:</div>
          <ul className={styles.char__comics_list}>
              <li className={styles.char__comics_item}>
                  All-Winners Squad: Band of Heroes (2011) #3
              </li>
              <li className={styles.char__comics_item}>
                  Alpha Flight (1983) #50
              </li>
              <li className={styles.char__comics_item}>
                  Amazing Spider-Man (1999) #503
              </li>
              <li className={styles.char__comics_item}>
                  Amazing Spider-Man (1999) #504
              </li>
              <li className={styles.char__comics_item}>
                  AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
              </li>
              <li className={styles.char__comics_item}>
                  Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
              </li>
              <li className={styles.char__comics_item}>
                  Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
              </li>
              <li className={styles.char__comics_item}>
                  Vengeance (2011) #4
              </li>
              <li className={styles.char__comics_item}>
                  Avengers (1963) #1
              </li>
              <li className={styles.char__comics_item}>
                  Avengers (1996) #1
              </li>
          </ul>
      </div>
  )
}
