import styles from './ComicsList.module.scss';

import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';



interface ComicsListProps { }

export const ComicsList = ({ }: ComicsListProps) => {
  return (
      <div className={styles.comics__list}>
          <ul className={styles.comics__grid}>
              <li className={styles.comics__item}>
                  <a href="#">
                      <img src={uw} alt="ultimate war" className={styles.comics__item_img}/>
                      <div className={styles.comics__item_name}>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                      <div className={styles.comics__item_price}>9.99$</div>
                  </a>
              </li>
              <li className={styles.comics__item}>
                  <a href="#">
                      <img src={xMen} alt="x-men" className={styles.comics__item_img}/>
                      <div className={styles.comics__item_name}>X-Men: Days of Future Past</div>
                      <div className={styles.comics__item_price}>NOT AVAILABLE</div>
                  </a>
              </li>
              <li className={styles.comics__item}>
                  <a href="#">
                      <img src={uw} alt="ultimate war" className={styles.comics__item_img}/>
                      <div className={styles.comics__item_name}>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                      <div className={styles.comics__item_price}>9.99$</div>
                  </a>
              </li>
              <li className={styles.comics__item}>
                  <a href="#">
                      <img src={xMen} alt="x-men" className={styles.comics__item_img}/>
                      <div className={styles.comics__item_name}>X-Men: Days of Future Past</div>
                      <div className={styles.comics__item_price}>NOT AVAILABLE</div>
                  </a>
              </li>
              <li className={styles.comics__item}>
                  <a href="#">
                      <img src={uw} alt="ultimate war" className={styles.comics__item_img}/>
                      <div className={styles.comics__item_name}>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                      <div className={styles.comics__item_price}>9.99$</div>
                  </a>
              </li>
              <li className={styles.comics__item}>
                  <a href="#">
                      <img src={xMen} alt="x-men" className={styles.comics__item_img}/>
                      <div className={styles.comics__item_name}>X-Men: Days of Future Past</div>
                      <div className={styles.comics__item_price}>NOT AVAILABLE</div>
                  </a>
              </li>
              <li className={styles.comics__item}>
                  <a href="#">
                      <img src={uw} alt="ultimate war" className={styles.comics__item_img}/>
                      <div className={styles.comics__item_name}>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                      <div className={styles.comics__item_price}>9.99$</div>
                  </a>
              </li>
              <li className={styles.comics__item}>
                  <a href="#">
                      <img src={xMen} alt="x-men" className={styles.comics__item_img}/>
                      <div className={styles.comics__item_name}>X-Men: Days of Future Past</div>
                      <div className={styles.comics__item_price}>NOT AVAILABLE</div>
                  </a>
              </li>
          </ul>
          <button className={`${styles.button} ${styles.button__main} ${styles.button__long}`}>
              <div className={styles.inner}>load more</div>
          </button>
      </div>
  )
}