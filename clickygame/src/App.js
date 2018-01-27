import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
          <h1 className="App-title">It's Clicky Time!</h1>
        </header>
        <p className="App-intro">
          Click on an image to earn points, but don't click on any more than once!
        </p>
      </div>
    );
  }
}

export default App;
