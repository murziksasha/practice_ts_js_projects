
import { useContext } from 'react';
import { CityContext, IDataCities } from '../../utils/context';
import CityItem from '../CityItem/CityItem';
import Message from '../Message/Message';
import Spinner from '../Spinner/Spinner';
import styles from './CityList.module.scss';

interface IPropsCityList {}

export default function CityList({}: IPropsCityList) {
  const {isLoading, dataCities} = useContext(CityContext);
  if (isLoading) return <Spinner />;
  if(!dataCities.length) return <Message message={`Add your city by clickig a city on the map`}/>
  return (
    <ul className={styles.cityList}>
      {dataCities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
