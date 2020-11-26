import React, { Component } from 'react';


class Pokemon extends Component {
  render() {
    return (
      <div className="flex">
        <div className="pokecard">
            <h2>{this.props.name}</h2>
            <img src={this.props.image} />
            <p>
              <strong>Type:</strong> {this.props.type}
            </p>
        </div>
      </div>
    );
  }
}

export default Pokemon;


