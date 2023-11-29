import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import Login from '../../pages/Login/Login';
import AppLayout from '../../pages/AppLayout/AppLayout';
import Product from '../../pages/Product/Product';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/app' element={<AppLayout/>}>
          <Route index element={<p>LIST...</p>}/>
          <Route path='cities' element={<p>List of cities</p> }/>
          <Route path='countries' element={<p>countries....</p> }/>
          <Route path='form' element={<p>Form...</p> }/>
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
