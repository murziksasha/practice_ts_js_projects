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
import CityProvider, { CityContext, IDataCities } from '../../utils/context';


export default function App() {
  return (
    <CityProvider>
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
    </CityProvider>
  );
}
