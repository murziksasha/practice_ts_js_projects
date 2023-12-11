import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import Login from '../../pages/Login/Login';
import AppLayout from '../../pages/AppLayout/AppLayout';
import Product from '../../pages/Product/Product';
import CityList from '../CityList/CityList';
import CountryList from '../CountryList/CountryList';
import City from '../City/City';
import Form from '../Form/Form';
import CityProvider from '../../utils/context';
import AuthProvider from '../../utils/fakeAuthContext';
import ProtectRout from '../../pages/ProtectRout';


export default function App() {
  return (
    <AuthProvider>
      <CityProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path='/product' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='/app' element={
              <ProtectRout>
                <AppLayout/>
              </ProtectRout>
            }>
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
    </AuthProvider>
  );
}
