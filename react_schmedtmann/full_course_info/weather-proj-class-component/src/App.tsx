import React, { Component } from "react";

interface AppState {
  count: number;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increase = (num: number) => {
    this.setState((prevState) => ({ count: prevState.count + num }));
  };

  render() {
    const date = new Date('june 21 2027');
    date.setDate(date.getDate() + this.state.count) 
    return (
      <div>
        <span>{date.toDateString()}</span>
        <br />
        <button onClick={() => this.increase(-1)}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.increase(1)}>+</button>
      </div>
    );
  }
}

export default App;
