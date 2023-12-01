
import styles from './CountryList.module.scss';
import { IDataCities } from '../App/App';
import Message from '../Message/Message';
import Spinner from '../Spinner/Spinner';
import CountryItem from '../CountryItem/CountryItem';

interface IPropsCityList {
  cities: IDataCities[];
  isLoading: boolean;
}

const CountryList = ({
  cities,
  isLoading,
}: IPropsCityList) => {
  if (isLoading) return <Spinner />;
  if(!cities.length) return <Message message={`Add your countries by clickig a country on the map`}/>

  const countries = cities.reduce((acc: { country: string; emoji: string }[], cur) => {
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