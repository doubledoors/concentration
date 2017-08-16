import React, { Component } from 'react';

class Card extends React.Component {
  
  render() {
    return (
      <button className="card">
        <span class="rank">{this.props.rank}</span>
        <span class="suit">{this.props.suit}</span>
      </button>
    );
  }
}

export default Card;