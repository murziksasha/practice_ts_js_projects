import { createContext } from "react";


export interface IDataCities {
  "cityName": string;
  "country": string;
  "emoji": string;
  "date": string;
  "notes": string;
  "position": {
    "lat": number;
    "lng": number;
  },
  "id": number;
}

export const CityContext = createContext<{
  dataCities: IDataCities[],
  isLoading: boolean,
}>({
  dataCities: [],
  isLoading: false,
});