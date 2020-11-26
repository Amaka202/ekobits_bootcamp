import React, { Component } from 'react';
import {colors} from "../colors";


class Box1 extends Component {

    // constructor(props){
    //     super(props);
        
    // }

    newColor = () => {
        this.props.newColor()
    }


    render() {
      console.log(this.props)
        return (
            <div className="box" onClick={this.newColor}>
                
            </div>
        );
    }
}

export default Box1;
