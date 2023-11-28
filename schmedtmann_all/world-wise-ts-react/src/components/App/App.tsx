import Homepage from '../../pages/Homepage/Homepage';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import Product from '../../pages/Pricing/Pricing';
import Pricing from '../../pages/Pricing/Pricing';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/product' element={<Product />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
