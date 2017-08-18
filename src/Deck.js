import React, { Component } from 'react';
import Card from './Card';
import { v4 } from 'uuid';

class Deck extends Component {

  constructor() {
    super();
    this.state = {
      
    };
  }

  componentWillMount() {
    this._createDeck();
  }
  
  _createDeck(){
    this.ranks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['♥','♦','♣','♠'];
    let deck = [];

    for( let s = 0; s < this.suits.length; s++ ) {
      for( let r = 0; r < this.ranks.length; r++ ) {
        deck.push({
          suit: this.suits[s],
          rank: this.ranks[r],
          id: v4(),
        });
      }
    }
    
    if (this.props.shuffled){
      this._shuffleDeck(deck);
    }
    
    this.setState({ deck });
  }
  
  _shuffleDeck(d) {
    for (let i = d.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [d[i - 1], d[j]] = [d[j], d[i - 1]];
    }
  }

  render() {
    
    return (
      <div>
        <div className="board-row">
          {this.state.deck.map(card =>
            <Card
              id={card.id}
              key={card.id}
              suit={card.suit}
              rank={card.rank}
              flipped={this.props.isFaceUp}
              onClick={this.props.handleCardClick}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Deck;