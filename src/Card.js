import React, { Component } from 'react';
const classNames = require( 'classnames' );

class Card extends Component {
  
  render() {
    
    let cardFace = <div><span>{this.props.rank}</span><span>{this.props.suit}</span></div>;
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
            {cardFace}
          </figure>
          <figure className="front">
            {this.props.debugMode ? cardFace : null}
          </figure>
        </button>
      </div>
    );
  }
}

export default Card;