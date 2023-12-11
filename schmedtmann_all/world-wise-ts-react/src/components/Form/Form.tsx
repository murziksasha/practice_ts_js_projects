// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { v4 as uuidv4 } from 'uuid';

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./Form.module.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../../hooks/useUrlPosition";
import { IDataCities, useCities } from "../../utils/context";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";

const BASE_URL =  "https://api.bigdatacloud.net/data/reverse-geocode-client";


interface IDataFromMap {
city: string;
continent: string;
continentCode: string;
countryCode: string;
countryName: string;
latitude: number;
locality: string;
longitude: number;
principalSubdivision: string;
}

export function convertToEmoji(countryCode: string): string {
  const codePoints: number[] = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const navigate = useNavigate();
  const  [lat, lng] = useUrlPosition();
  const {createCity, isLoading} = useCities();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [emoji, setEmoji] = useState('');
  const [geoCodingError, setGeoCodingError] = useState('');

  useEffect(()=>{
    if(!lat && !lng) return;
    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true);
        setGeoCodingError('');
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data: IDataFromMap = await res.json();
        if(!data.countryCode) throw new Error(`The city not existed, try on another place 😉`);
        setCityName(data.city || data.locality || '');
        setEmoji(convertToEmoji(data.countryCode));
        
      } catch (error) {
        if(error instanceof Error) {
          setGeoCodingError(error.message);
          setCityName(geoCodingError)
        }
      } finally {
        setIsLoadingGeocoding(false);
      }
    }

    fetchCityData();
  }, [lat, lng]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(!cityName || !date) return;

    const newCity = {
      id: Number(uuidv4()), 
      cityName,
      country,
      emoji,
      date: date.toISOString(),
      notes,
      position: {lat, lng}
    }

    await createCity(newCity);
    navigate('/app/cities')
  }

  if(isLoadingGeocoding) return <Spinner/>

  if(!lat && !lng) return <Message message="Start by clicking somewhere on the map..."/>

  if(geoCodingError) return <Message message={geoCodingError} />

  return (
    <form className={`${styles.form} ${isLoading ? styles.loading:''}`} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(new Date(e.target.value))}
          value={date.toISOString().split('T')[0]}
        /> */}
        <DatePicker 
          id="date" 
          selected={date} 
          onChange={(date) => setDate(date)} 
          dateFormat={'dd/MM/yyyy'}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button>Add</Button>
        <Button type='back' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          navigate(-1);
        }}>&larr; Back</Button>
      </div>
    </form>
  );
}

export default Form;

