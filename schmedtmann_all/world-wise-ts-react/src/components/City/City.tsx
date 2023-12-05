import {useParams, useSearchParams } from "react-router-dom";
import { formatDate } from "../CityItem/CityItem";
import styles from "./City.module.scss";
import { useCities } from "../../utils/context";
import { useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import ButtonBack from "../ButtonBack/ButtonBack";

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     weekday: "long",
//   }).format(new Date(date));

function City() {
  const {id} = useParams();
  const {currentCity, getCity, isLoading} = useCities();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  useEffect(() => {
    if(!id) return;
    getCity(id);
    
  },[id]);
  
  if(isLoading) return <Spinner/>


  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{currentCity.emoji}</span> {currentCity.cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {currentCity.cityName} on</h6>
        <p>{formatDate(currentCity.date || null)}</p>
      </div>

      {currentCity.notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{currentCity.notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${currentCity.cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {currentCity.cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <ButtonBack/>
      </div>
    </div>
  );
}

export default City;
