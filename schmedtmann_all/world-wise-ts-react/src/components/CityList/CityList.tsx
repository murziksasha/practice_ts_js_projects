import { IDataCities } from '../App/App';
import CityItem from '../CityItem/CityItem';
import Message from '../Message/Message';
import Spinner from '../Spinner/Spinner';
import styles from './CityList.module.scss';

interface IPropsCityList {
  cities: IDataCities[];
  isLoading: boolean;
}

export default function CityList({
  cities,
  isLoading,
}: IPropsCityList) {
  if (isLoading) return <Spinner />;
  if(!cities.length) return <Message message={`Add your city by clickig a city on the map`}/>
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
