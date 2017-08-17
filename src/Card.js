import React, { Component } from 'react';
const classNames = require( 'classnames' );

class Card extends Component {
  
  render() {
    
    let classes = classNames( this.props.className, {
        'card': true,
        'red': this.props.suit === "♥" || this.props.suit === "♦"
    } );
    
    return (
      <button className={classes} onClick={this.props.handleCardClick}>
        <span>{this.props.rank}</span>
        <span>{this.props.suit}</span>
      </button>
    );
  }
}

export default Card;