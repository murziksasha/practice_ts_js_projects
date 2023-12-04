import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Homepage from '../../pages/Homepage/Homepage';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import Login from '../../pages/Login/Login';
import AppLayout from '../../pages/AppLayout/AppLayout';
import Product from '../../pages/Product/Product';
import CityList from '../CityList/CityList';
import CountryList from '../CountryList/CountryList';
import City from '../City/City';
import Form from '../Form/Form';
import { CityContext, IDataCities } from '../../utils/context';

const BASE_URL = 'http://localhost:9000';





export default function App() {
  const [dataCities, setDataCities] = useState<IDataCities[]>([]);
  const [isLoading, setIsLoading] = useState(false);


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


  return (
    <CityContext.Provider value = {{
      dataCities,
      isLoading
    }}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/app' element={<AppLayout/>}>
          {/* <Route index element={<CityList cities={dataCities} isLoading={isLoading}/>}/> */}
          <Route index element={<Navigate replace to='cities' />}/>
          <Route path='cities' element={<CityList/>}/>
          <Route path='countries' element={<CountryList />}/>
          <Route path='cities/:id' element={<City/>}/>
          <Route path='form' element={<Form/>}/>
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </CityContext.Provider>
  );
}
