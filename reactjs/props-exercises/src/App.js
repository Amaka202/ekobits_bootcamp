import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from './Components/Pokedex';


class App extends Component {
  render() {
    return (
      <div>
        <Pokedex />
      </div>
    );
  }
}

export default App;
