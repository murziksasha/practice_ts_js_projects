import React from 'react';
import ReactDOM from 'react-dom/client';
import { StarRating } from './components/StarRating';
import { TextExpanderComponent } from './components/TextExpanderComponent';
// import './index.css';
// import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating maxRatingStars={5}/>
    <StarRating maxRatingStars={10} color='pink' size={25} className='test'/>
    <StarRating maxRatingStars={5} color='blue' messages={['terrible', 'bad', 'ok', 'good', 'amazing']} defaultRating={3}/> */}
    <TextExpanderComponent/>
  </React.StrictMode>
);
