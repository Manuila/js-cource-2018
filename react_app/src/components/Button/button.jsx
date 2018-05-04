import React, { Component } from 'react';
import scss from './button.scss';

class Button extends Component {
    render() {
        const className = "btn";
        return (
            <button
                className = {className + " " + this.props.style}
                onClick = {this.props.handleClick}>
                {this.props.title}
            </button>
        );
      }
    }
export default Button;

