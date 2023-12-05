

import { Link} from 'react-router-dom';
import styles from './CityItem.module.scss';
import { IDataCities, useCities } from '../../utils/context';

interface IPropsCityItem {
  city: IDataCities;
}

export const formatDate = (date: string | null) => {
  if(!date) return '';
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
  }).format(new Date(date));
}


export default function CityItem({city}: IPropsCityItem) {
  const {currentCity} = useCities();
  return (
    <li >
      <Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`} className={`${styles.cityItem} ${city.id === currentCity.id ? styles['cityItem--active']: ''}`}>
        <span className={styles.emoji}>{`${city.emoji}`}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>{formatDate(city.date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  )
}
