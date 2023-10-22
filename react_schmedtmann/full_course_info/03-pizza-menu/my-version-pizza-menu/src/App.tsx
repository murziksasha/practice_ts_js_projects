
import './App.css';
import {pizzaData} from './data.js'
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

function App() {


  

  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
