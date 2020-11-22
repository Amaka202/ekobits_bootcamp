import React, { Component } from 'react';

class Tweet extends Component {
    render() {
        return (
            <div className="tweet">
                <p>{this.props.message}</p>
                <span>{this.props.username }</span>
                <span>{this.props.name}</span>
                <span>{this.props.date}</span>
            </div>
        );
    }
}

export default Tweet;
