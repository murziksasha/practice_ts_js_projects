import React, { useState, FC } from 'react';

import './App.css';
import { useGeolocation } from './hooks/useGeolocation';



const App: FC = () => {
  const {isLoading, position: {lat, lng}, error, getPosition} = useGeolocation();
  const [countClicks, setCountClicks] = useState<number>(0);

  function handleClick() {
    setCountClicks((count) => count + 1);
    getPosition();
  }

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
};

export default App;