import { IDataCities } from "../App/App";
import styles from "./CountryItem.module.scss";

interface IPropsCountryItem {
  country: Partial<IDataCities>;
}


function CountryItem({ country }: IPropsCountryItem) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
