import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      firstName: "",
      lastName: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    console.log(this.state.firstName);
    return (
      <div>
        <form>
          <input type="text" name="firstName" placeholder="Enter firstname" onChange={this.handleChange}/>
          <input type="text" name="lastName" placeholder="Enter lastname" onChange={this.handleChange}/>
          <input type="checkbox" />
          <p>{this.state.firstName} {this.state.lastName} </p>
        </form>
      </div>
    )
  }
}



