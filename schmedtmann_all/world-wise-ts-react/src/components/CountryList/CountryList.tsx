
import styles from './CountryList.module.scss';
import Message from '../Message/Message';
import Spinner from '../Spinner/Spinner';
import CountryItem from '../CountryItem/CountryItem';
import { useContext } from 'react';
import { CityContext } from '../../utils/context';

interface IPropsCityList {

}

const CountryList = ({}: IPropsCityList) => {
  const {isLoading, dataCities} = useContext(CityContext);
  if (isLoading) return <Spinner />;
  if(!dataCities.length) return <Message message={`Add your countries by clickig a country on the map`}/>

  const countries = dataCities.reduce((acc: { country: string; emoji: string }[], cur) => {
    if (!acc.some((el) => el.country === cur.country)) {
      return [...acc, { country: cur.country, emoji: cur.emoji }];
    } else {
      return acc;
    }
  }, []);

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;