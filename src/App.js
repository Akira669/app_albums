import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//material-ui 
import {withStyles} from '@material-ui/core/styles';

import AppBar from './components/appNav';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppBar />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default withStyles({
  button:{
    backgroundColor: 'pink', display:'none'
  }
})(App);
