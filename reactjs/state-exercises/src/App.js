import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box1 from "./Components/Box1"
import Box2 from './Components/Box2';
import Box3 from './Components/Box3';
import {colors} from "./colors";


class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: "salmon"
    }
  }

  changeBackground () {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      backgroundColor: newColor
    })
  }


  render() {
    
    return (
      <div>
        <Box1 newColor={this.changeBackground}/>
        <Box2 />
        <Box3 />
      </div>
    );
  }
}

export default App;


