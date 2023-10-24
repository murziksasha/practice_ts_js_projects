
import './App.css';
import {pizzaData} from './data.js'
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { PizzaData } from './types/PizzaData';

const data: PizzaData[] = [...pizzaData];

function App() {
  
  return (
    <div className="App">
      <Header />
      <Menu data={data}/>
      <Footer/>
    </div>
  );
}

export default App;
