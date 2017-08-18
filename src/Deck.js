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
  
  // check whether card id is contained in this.props.(matched||active)Cards
  checkCardStatus(id, status) {
    const err = new Error('nah m80');
    if (!status) {
      throw err;
    }
    let arr;
    switch(status) {
      case 'active': {
        arr = this.props.activeCards;
        break;
      }
      case 'matched': {
        arr = this.props.matchedCards;
        break;
      }
      default: {
        throw err;
      }
    }
    if (arr) {
      const data = arr.find(item => {
        return item.id === id
      });
      if (data !== undefined) return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.state.deck.map(card =>
            <Card
              isActive={this.checkCardStatus(card.id, 'active')}
              isMatched={this.checkCardStatus(card.id, 'matched')}
              id={card.id}
              key={card.id}
              suit={card.suit}
              rank={card.rank}
              onClick={this.props.handleCardClick}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Deck;