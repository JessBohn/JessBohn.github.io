import React, { Component } from 'react';
import Typist from 'react-typist';
//import logo from './logo.svg';
import './App.css';
import hello from './images/hello.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hello} className="App-logo" alt="logo" />
          <h1 className="App-title"><Typist avgTypingDelay={125}>Jessica Bohn</Typist></h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
