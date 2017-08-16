import React, { Component } from 'react';
import Card from './Card';

class Board extends React.Component {
  
  constructor() {
    super();
    this.state = {
      deck: this.createDeck(),
    };
  }
  
  createDeck(){
    this.ranks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['Hearts','Diamonds','Spades','Clubs'];
    let deck = [];

    for( let s = 0; s < this.suits.length; s++ ) {
      for( let n = 0; n < this.ranks.length; n++ ) {
        
        let card = {};
        card.suit = this.suits[s];
        card.rank = this.ranks[n];
        
        deck.push(card);
      }
    }
    
    return deck;
  }
  
  renderDeck() {
    for( let i = 0; i < this.state.deck.length; i++ ) {
      return <Card rank={this.state.deck[i].rank} suit={this.state.deck[i].suit} />;
    }
  }

  render() {
    const status = 'Next player: X'

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderDeck()}
        </div>
      </div>
    );
  }
}

export default Board;