import React, { Component } from "react";
import { convertToFlag } from "./services/fetchWeatherData";
import { Weather } from "./components/Weather/Weather";

export interface WeatherData {
  temperature_2m_max?: number[];
  temperature_2m_min?: number[];
  time?: string[];
  weathercode?: number[];
  // Add other properties as needed
}

export interface AppState {
  location?: string;
  isLoading?: boolean;
  displayLocation?: string;
  weather: WeatherData;
}

class App extends Component<{}, AppState> {

  state = {
    location: 'Odessa',
    isLoading: false,
    displayLocation: '',
    weather: {
      weathercode: [],
    }
  }


  handleChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    this.setState({location: target.value});
  }

  fetchWeather = async  () => {
    try {
      this.setState((prevState) => ({ ...prevState, isLoading: true }));
      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();
      console.log(geoData);
  
      if (!geoData.results) throw new Error("Location not found");
  
      const { latitude, longitude, timezone, name, country_code } =
        geoData.results[0];
      this.setState({displayLocation: `${name} ${convertToFlag(country_code)}`});
  
      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      this.setState({weather: weatherData.daily});
    } catch (err) {
      console.error(err);
    } finally {
      this.setState(prevState => ({ ...prevState, isLoading: false }));
    }
  }


  render() {
    const {location, isLoading, weather, displayLocation} = this.state;
    return (
      <div className="App">
        <h1>Classy Weather</h1>
        <div>
          <input type="text" placeholder="Search from location..." 
            value={location} onChange={this.handleChangeLocation}/>
        </div>
        <br />
        <button onClick={this.fetchWeather}>Get Weather</button>
        {isLoading && <p className="loader">Loading...</p>
        }
        {weather.weathercode && !isLoading && <Weather
          weather={weather} location = {displayLocation}
        />}
      </div>
    )
  }
}

export default App;
