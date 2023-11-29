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
        <Route path='/' element={<Homepage />} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/app' element={<AppLayout/>}/>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
