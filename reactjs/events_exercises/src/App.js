import React, { Component } from 'react'
import CustomLink from './Components/CustomLink'
import "./App.css"
import Todo from './Components/Todo'
import {todos} from "./Components/TodoList"


export default class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        isDisabled: false,
        style: {},
        isTicked: false,
        handleCompleteStyle: {},
        todos: todos
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

    handleComplete = () =>{
      const handleCompleteStyled = {
          color: "grey",
          fontStyle: "italic",

      }
      this.setState((prevState) => {
        return {
          isTicked: !prevState.isTicked,
          handleCompleteStyle: !prevState.isTicked ? handleCompleteStyled : null

        }
      })
   }

  //  handleDelete = (key) => {
  //     const newTodosList = this.state.todos.filter((val, index) => index !== key)

  //     this.setState({
  //       todos: newTodosList
  //     })
  //  }

  render() {
    console.log(todos)
    const newTodos = todos.map((val, index) => {
      return (<Todo key={index}
                myTask={val}
                handleComplete={this.handleComplete} checked={this.state.isTicked} handleCompleteStyle={this.state.handleCompleteStyle}
                removeItem={this.handleDelete} 
              />)
    })
    return (
      <div className="linkDiv">
        <CustomLink href="https://www.google.com/" text="Click to visit google" style={this.state.style}/>

        <CustomLink href="https://www.amazon.com/" text="Click to visit Amazon" style={this.state.style}/>

        <CustomLink href="https://web.facebook.com/?_rdc=1&_rdr" text="Click to visit facebook" style={this.state.style}/>

        <button onClick={this.handleClick}>{this.state.isDisabled ? "Disable" : "Enable"} Links</button>

        
        {newTodos}
      </div>
    )
  }
}
