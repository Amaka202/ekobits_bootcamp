import React, { Component } from 'react';

class Person extends Component {
    render() {


        return (
            <div>
                <p>Learn some information about this person</p>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <h3>{this.props.desc}</h3>
                
            </div>
        );
    }
}

export default Person;