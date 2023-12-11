import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';

const BASE_URL = 'http://localhost:9000';

export interface IDataCities {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
}

const initialCity: IDataCities = {
  cityName: '',
  country: '',
  emoji: '',
  date: '',
  notes: '',
  position: {
    lat: 0,
    lng: 0,
  },
  id: 0,
};

export const CityContext = createContext<{
  dataCities: IDataCities[];
  isLoading: boolean;
  currentCity: IDataCities;
  getCity(id: string): Promise<void>;
  createCity(newCity: IDataCities): Promise<void>;
  deleteCity(id: number): Promise<void>;
  error: string;
}>({
  dataCities: [],
  isLoading: false,
  currentCity: initialCity,
  getCity: async (id) => {},
  createCity: async (newCity) => {},
  deleteCity: async (id) => {},
  error: ''
});

interface IPropsCityProvider {
  children: React.ReactNode;
}

interface State {
  cities: IDataCities[];
  isLoading: boolean;
  currentCity: IDataCities;
  error: string;
}

interface Action {
  type: string;
  payload?: any;
}

function reducer(state: State, action: Action) {

  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true,
      };
    case 'cities/loaded':
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case 'city/loaded':
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    case 'city/created':
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case 'city/deleted':
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter(
          (city) => city.id !== action.payload
        ),
        currentCity: {},
      };
    case 'rejected':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      console.log('unknown state in reducer...');
      return state;
  }
}

const initialState: State = {
  cities: [],
  isLoading: false,
  currentCity: initialCity,
  error: '',
};

export default function CityProvider({
  children,
}: IPropsCityProvider) {
  const [{ cities, isLoading, currentCity, error }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const timeout = (s: number) =>
        new Promise<void>((_, reject) => {
          const timerId = setTimeout(() => {
            reject(
              new Error(
                `Request took too long! Timeout after ${s} seconds`
              )
            );
          }, s * 1000);

          return () => clearTimeout(timerId);
        });
      dispatch({ type: 'loading' });
      try {
        const response = (await Promise.race([
          fetch(`${BASE_URL}/cities`),
          timeout(10),
        ])) as Response;

        if (!response.ok) {
          throw new Error(`${response.status}`);
        }

        const data: IDataCities[] = await response.json();
        dispatch({ type: 'cities/loaded', payload: data });
      } catch (error: unknown) {
        if (error instanceof Error)
          dispatch({
            type: 'error',
            payload: `There was an error loading cities:  ${error.message}`,
          });
        console.error(`An unknow error occured -  `, error);
      }
    };

    fetchData();
  }, []);

  async function getCity(id: string) {

    if(id === currentCity.id) return;

    const timeout = (s: number) =>
      new Promise<void>((_, reject) => {
        const timerId = setTimeout(() => {
          reject(
            new Error(
              `Request took too long! Timeout after ${s} seconds`
            )
          );
        }, s * 1000);

        return () => clearTimeout(timerId);
      });

    dispatch({ type: 'loading' });
    try {
      const response = (await Promise.race([
        fetch(`${BASE_URL}/cities/${id}`),
        timeout(10),
      ])) as Response;

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const data: IDataCities = await response.json();
      dispatch({ type: 'city/loaded', payload: data });
    } catch (error: unknown) {
      if (error instanceof Error)
        dispatch({
          type: 'error',
          payload: `There was an error loading the city:  ${error.message}`,
        });
      console.error(`An unknow error occured -  `, error);
    }
  }

  async function createCity(newCity: IDataCities) {
    const timeout = (s: number) =>
      new Promise<void>((_, reject) => {
        const timerId = setTimeout(() => {
          reject(
            new Error(
              `Sending data is took too long! Timeout after ${s} seconds`
            )
          );
        }, s * 1000);

        return () => clearTimeout(timerId);
      });

    dispatch({ type: 'loading' });

    try {
      const response = (await Promise.race([
        fetch(`${BASE_URL}/cities`, {
          method: 'POST',
          body: JSON.stringify(newCity),
          headers: {
            'Content-Type': 'application/json',
          },
        }),
        timeout(10),
      ])) as Response;

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      console.log(response);

      const data: IDataCities = await response.json();
      dispatch({ type: 'city/created', payload: data });
    } catch (error: unknown) {
      if (error instanceof Error)
        dispatch({
          type: 'error',
          payload: `There was an error creating the city:  ${error.message}`,
        });
      console.error(`An unknow error occured -  `, error);
    }
  }

  async function deleteCity(id: number) {
    const timeout = (s: number) =>
      new Promise<void>((_, reject) => {
        const timerId = setTimeout(() => {
          reject(
            new Error(
              `Deleting data is took too long! Timeout after ${s} seconds`
            )
          );
        }, s * 1000);

        return () => clearTimeout(timerId);
      });

    try {
      dispatch({ type: 'loading' });
      const response = (await Promise.race([
        fetch(`${BASE_URL}/cities/${id}`, {
          method: 'DELETE',
        }),
        timeout(10),
      ])) as Response;

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      dispatch({ type: 'city/deleted', payload: id });
    } catch (error: unknown) {
      if (error instanceof Error)
        dispatch({
          type: 'error',
          payload: `There was an error delete the city:  ${error.message}`,
        });
      console.error(`An unknow error occured -  `, error);
    }
  }

  return (
    <CityContext.Provider
      value={{
        dataCities: cities,
        isLoading,
        error,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CityContext);
  if (context === undefined)
    throw new Error(
      'CityContext was used outside of the CityProvider!'
    );
  return context;
}
