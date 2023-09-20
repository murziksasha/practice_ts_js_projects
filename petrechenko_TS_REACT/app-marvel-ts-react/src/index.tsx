import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import MarvelService from './services/MarvelService';
import App from './App';

const marvelService = new MarvelService();

marvelService.getAllCharacters().then(res => res.data.results.forEach((item: any) => console.log(item.name)));
// marvelService.getCharacter().then(res => console.log(res.data.results));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

