import React, { Component } from 'react';

class NamedComponent extends Component {
    render() {
        return (
            <div>
                <p>My name is {this.props.name}</p>
            </div>
        );
    }
}

export default NamedComponent;