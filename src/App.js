import React, { Component } from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 0};
    
    setInterval(() => {

      if (this.state.count > 60) {
        window.location.reload();
      }
        this.setState({ count: this.state.count + 1 })

      }, 1000);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React JS</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
          <div>
            <b>This Apps will closed after a minutes</b>
            <br></br>
            <div>
              {this.state.count}
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
