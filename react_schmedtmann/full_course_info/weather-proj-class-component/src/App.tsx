import React, { Component } from "react";

interface AppState {
  location: string;
}

class App extends Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      location: 'ukraine',
    }
  }

  handleChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    this.setState({location: target.value});
  }

  fetchWeather = () => {
    console.log('loading data...');
    console.log(this.state.location);
  }


  render() {
    return (
      <div className="App">
        <h1>Classy Weather</h1>
        <div>
          <input type="text" placeholder="Search from location..." 
            value={this.state.location} onChange={this.handleChangeLocation}/>
        </div>
        <br />
        <button onClick={this.fetchWeather}>Get Weather</button>
      </div>
    )
  }
}

export default App;
