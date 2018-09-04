import React, { Component } from 'react';
import './App.css';
import Father from "./Father";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unmount: false
    }
  }
  render() {
    const { unmount } = this.state;
    return (
      <div className="App">
        <button onClick={() => {
          this.setState({
            unmount: !unmount
          })
        }}>{ unmount ? '生成' : '销毁'}</button>
        {!unmount && <Father appProp="appProp"/>}
      </div>
    );
  }
}

export default App;
