import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = 'http://localhost:9000';

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
};

const initialCity: IDataCities = {
  cityName: "",
  country: "",
  emoji: "",
  date: "",
  notes: "",
  position: {
    lat: 0,
    lng: 0,
  },
  id: 0,
};

export const CityContext = createContext<{
  dataCities: IDataCities[],
  isLoading: boolean,
  currentCity: IDataCities,
  getCity(id: string): Promise<void>
}>({
  dataCities: [],
  isLoading: false,
  currentCity: initialCity,
  getCity: async(id: string)=> {}
});

interface IPropsCityProvider {
  children: React.ReactNode;
}




export default function CityProvider({children}: IPropsCityProvider) {
  const [dataCities, setDataCities] = useState<IDataCities[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState<IDataCities>(initialCity);


  useEffect(() => {
    const fetchData = async () => {
      const timeout = (s: number) => new Promise<void>((_, reject) => {
        const timerId = setTimeout(() => {
          reject(new Error(`Request took too long! Timeout after ${s} seconds`));
        }, s * 1000);

        return () => clearTimeout(timerId);
      });

      try {
        setIsLoading(true);
        const response = await Promise.race([
          fetch(`${BASE_URL}/cities`),
          timeout(10),
        ]) as Response;

        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        
        const data: IDataCities[] = await response.json();
        setDataCities(data);
      } catch (error) {
        console.error(error); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  async function getCity(id: string) {
    const timeout = (s: number) => new Promise<void>((_, reject) => {
      const timerId = setTimeout(() => {
        reject(new Error(`Request took too long! Timeout after ${s} seconds`));
      }, s * 1000);

      return () => clearTimeout(timerId);
    });

    try {
      setIsLoading(true);
      const response = await Promise.race([
        fetch(`${BASE_URL}/cities/${id}`),
        timeout(10),
      ]) as Response;

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      
      const data: IDataCities = await response.json();
      setCurrentCity(data);
    } catch (error) {
      console.error(error); 
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CityContext.Provider value= {{
      dataCities,
      isLoading,
      currentCity,
      getCity
    }}>
      {children}
    </CityContext.Provider>
  )
}

export function useCities() {
  const context = useContext(CityContext);
  if(context === undefined) throw new Error('CityContext was used outside of the CityProvider!')
  return context;
}