import {useContext} from 'react';
import './App.css';
import { Cars } from './components/Cars';
import { CarContext } from './components/context/Context';



function App() {
const data = useContext(CarContext);

  return (
    <div className='main'>
      <Cars carData={data.carData}/>
    </div>
  );
}

export default App;
