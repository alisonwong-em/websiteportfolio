import React, { Component } from 'react';

class Gradient extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `linear-gradient(${this.props.color1}, ${this.props.color2})`, height: this.props.height, width: '100vw' }}></div >
        )
    }
}


export default Gradient;