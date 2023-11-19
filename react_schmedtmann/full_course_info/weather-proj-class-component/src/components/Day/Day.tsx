import * as React from 'react';
import { useEffect, useState } from 'react';
import { formatDay, getWeatherIcon } from '../../services/fetchWeatherData';

interface DayProps {
  date: string;
  max?: number;
  min?: number;
  code: number;
}

export const Day: React.FC<DayProps> = ({ date, max, min, code }) => {
  const [weatherIcon, setWeatherIcon] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherIcon = async () => {
      try {
        const icon = await getWeatherIcon(code);
        setWeatherIcon(icon);
      } catch (error) {
        console.error('Error fetching weather icon:', error);
        setWeatherIcon('N/A'); // Set a default icon or handle the error as needed
      }
    };

    fetchWeatherIcon();
  }, [code]);

  return (
    <li className='day'>
      <span>{weatherIcon}</span>
      <p>{formatDay(date)}</p>
      <p>
        Min: {min !== undefined ? Math.floor(min) : 'N/A'}&deg; &mdash;
        Max: {max !== undefined ? Math.ceil(max) : 'N/A'}&deg;
      </p>
    </li>
  );
};
