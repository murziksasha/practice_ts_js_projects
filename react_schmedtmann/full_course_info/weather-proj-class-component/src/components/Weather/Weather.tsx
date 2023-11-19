// @flow
import * as React from 'react';
import { Day } from '../Day/Day';
import { WeatherData } from '../../App';

interface Props{
  weather: WeatherData;
  location: string;
};

type State = {
  
};

export class Weather extends React.Component<Props, State>{
  render() {
    const {
      temperature_2m_max: max, 
      temperature_2m_min: min,
      time: dates,
      weathercode: codes
    } = this.props.weather;
    return (
      <div>
        <h2>Weather {this.props.location}</h2>
        <ul className='weather'>
          {dates?.map((date, i) => (
            <Day
              key={date}
              date={date}
              max={max?.[i]}
              min={min?.[i]}
              code={codes?.[i]}
            />
          ))}
        </ul>
      </div>
    );
  };
};