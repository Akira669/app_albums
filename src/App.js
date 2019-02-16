import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import AppBar from './components/appNav';


class App extends Component {
  render() {
    return (
        <header className="App-header">
          <AppBar />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
    );
  }
}

export default App;
