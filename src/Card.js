import React, { Component } from 'react';
const classNames = require( 'classnames' );

class Card extends Component {
  
  render() {
    
    let classes = classNames( this.props.className, {
        'card': true,
        'red': this.props.suit === "♥" || this.props.suit === "♦",
        'active': this.props.isActive,
        'matched': this.props.isMatched,
    } );
    
    return (
      <button className={classes} onClick={() => this.props.onClick(this.props.id, this.props.suit, this.props.rank)}>
        <span>{this.props.rank}</span>
        <span>{this.props.suit}</span>
      </button>
    );
  }
}

export default Card;