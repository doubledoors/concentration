/*eslint no-mixed-operators: "off"*/
import React, { Component } from 'react';
import Deck from './Deck';
import './Game.css';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      selectedCards: []
    };
    this._handleCardClick = this._handleCardClick.bind(this);
  }

  _handleCardClick(id, suit, rank){
    let duplicateCard = false;
    for(let i = 0; i < this.state.selectedCards.length; i++) {
        if (this.state.selectedCards[i].id === id) {
            duplicateCard = true;
            break;
        }
    }

    if(!duplicateCard){
      this.setState({selectedCards: this.state.selectedCards.concat([{id, suit, rank}])}, this._evaluatePicks);
    }
  }
  
  _evaluatePicks(){
    if(this.state.selectedCards.length >= 2){
      
      const firstPick = this.state.selectedCards[0];
      const secondPick = this.state.selectedCards[1];
      const matchedCards = this.state.matchedCards || [];
      
      if (firstPick.rank === secondPick.rank && this._evaluateColourMatch(firstPick.suit, secondPick.suit)){
        console.log('matched');
        matchedCards.push(firstPick, secondPick);
        // this.setState({
        //   matchedCards
        // });
        setTimeout(function() { this.setState({matchedCards}); }.bind(this), 1500);
      }else{
        setTimeout(function() { this.setState({selectedCards: []}); }.bind(this), 1500);
      }
    }
  }
  
  _evaluateColourMatch(a, b){
    if((a === "♥" || a === "♦") && (b === "♥" || b === "♦") || (a === "♣" || a === "♠") && (b === "♣" || b === "♠")) {
      return true;
    }
  }
  
  render() {
    let status = 'Next player: '+this.state.activePlayer;
    const { selectedCards, matchedCards } = this.state;
    return (
      <div className="game">
        <div className="game-board">
          <div className="status">{status}</div>
          <Deck
            shuffled={true}
            handleCardClick={this._handleCardClick}
            matchedCards={matchedCards}
            selectedCards={selectedCards}
            debugMode={true}
          />
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
