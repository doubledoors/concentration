import React, { Component } from 'react';
import Card from './Card';
import { v4 } from 'uuid';

class Deck extends Component {

  constructor() {
    super();
    this.state = {
      
    };
  }
  
  createDeck(){
    this.ranks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['♥','♦','♣','♠'];
    let deck = [];

    for( let s = 0; s < this.suits.length; s++ ) {
      for( let r = 0; r < this.ranks.length; r++ ) {
        deck.push(<Card key={v4()} rank={this.ranks[r]} suit={this.suits[s]} />);
      }
    }
    
    return deck;
  }
  
  shuffleDeck(d) {
    for (let i = d.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [d[i - 1], d[j]] = [d[j], d[i - 1]];
    }
  }

  render() {
    let deck = this.createDeck();
    
    if (this.props.shuffled){
      this.shuffleDeck(deck);
    }
    
    return (
      <div>
        <div className="board-row">
          {deck}
        </div>
      </div>
    );
  }
}

export default Deck;