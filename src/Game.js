import React, { Component } from 'react';
import Deck from './Deck';
import './Game.css';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      activeCards: []
    };
    this._handleCardClick = this._handleCardClick.bind(this);
  }

  _handleCardClick(id, suit, rank){
    this.setState({activeCards: this.state.activeCards.concat([{id, suit, rank}])}, this._evaluatePicks);
  }
  
  _evaluateColourMatch(a, b){
    
    if((a === "♥" || a === "♦") && (b === "♥" || b === "♦") || (a === "♣" || a === "♠") && (b === "♣" || b === "♠")) {
      return true;
    }

  }
  
  _evaluatePicks(){
    
    if(this.state.activeCards.length >= 2){
      
      let firstPick = this.state.activeCards[0];
      let secondPick = this.state.activeCards[1];
      
      if (firstPick.rank === secondPick.rank && this._evaluateColourMatch(firstPick.suit, secondPick.suit) ){
        console.log('match');
      }
      
      this.setState({activeCards: []});
    }
    
  }
  
  render() {
    let status = 'Next player: '+this.state.activePlayer;
    
    return (
      <div className="game">
        <div className="game-board">
          <div className="status">{status}</div>
          <Deck shuffled={true} handleCardClick={this._handleCardClick}/>
        </div>
        <div className="game-info">
          <div>
            <p>Concentration, also known as Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all of the cards are laid face down and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.</p>
            <p>In turn, each player chooses two cards and turns them face up. If they are of the same rank and color (e.g. six of hearts and six of diamonds, queen of clubs and queen of spades) then that player wins the pair and plays again. If they are not of the same rank and color, they are turned face down again and play passes to the next player.</p></div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
