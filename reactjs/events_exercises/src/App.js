import React, { Component } from 'react'
import CustomLink from './Components/CustomLink'
import "./App.css"

export default class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        isDisabled: false,
        style: {}
      }
    }


    handleClick = () => {
      const customeStyle = {
        cursor: "default",
        pointerEvents: "none",     
        textDecoration: "none",
        color: "grey"
    }
      this.setState((prevState) => {

        return {
          isDisabled: !prevState.isDisabled,
          style: this.state.isDisabled ? customeStyle : null
        }
      })
    }

  render() {
    return (
      <div className="linkDiv">
        <CustomLink href="https://www.google.com/" text="Click to visit google" style={this.state.style}/>

        <CustomLink href="https://www.amazon.com/" text="Click to visit Amazon" style={this.state.style}/>

        <CustomLink href="https://web.facebook.com/?_rdc=1&_rdr" text="Click to visit facebook" style={this.state.style}/>

        <button onClick={this.handleClick}>{this.state.isDisabled ? "Disable" : "Enable"} Link</button>
      </div>
    )
  }
}
