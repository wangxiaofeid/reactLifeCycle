import React, { Component } from 'react';
import './App.css';
import Father from "./Father";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Father appProp="appProp"/>
      </div>
    );
  }
}

export default App;
