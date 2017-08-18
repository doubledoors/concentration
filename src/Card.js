import React, { Component } from 'react';
const classNames = require( 'classnames' );

class Card extends Component {
  
  render() {
    
    let classes = classNames( this.props.className, {
        'card': true,
        'red': this.props.suit === "♥" || this.props.suit === "♦",
        'selected': this.props.isSelected,
        'matched': this.props.isMatched,
        [`${this.props.suit}`]: true
    } );
    
    return (
      <div className="card-container">
        <button className={classes} onClick={() => this.props.onClick(this.props.id, this.props.suit, this.props.rank)}>
          <figure className="back">
            <span>{this.props.rank}</span>
            <span>{this.props.suit}</span>
          </figure>
          <figure className="front"></figure>
        </button>
      </div>
    );
  }
}

export default Card;