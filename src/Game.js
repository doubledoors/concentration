import React, { Component } from 'react';
import Deck from './Deck';
import './Game.css';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      versusGame: true,
      player1Name: "",
      player2Name: "",
      activePlayer: "Ben"
    };
  }
  
  render() {
    let status = 'Next player: '+this.state.activePlayer;
    
    return (
      <div className="game">
        <div className="game-board">
          <div className="status">{status}</div>
          <Deck shuffled={true}/>
        </div>
        <div className="game-info">
          <div>In turn, each player chooses two cards and turns them face up. If they are of the same rank and color (e.g. six of hearts and six of diamonds, queen of clubs and queen of spades) then that player wins the pair and plays again. If they are not of the same rank and color, they are turned face down again and play passes to the player on the left.</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
