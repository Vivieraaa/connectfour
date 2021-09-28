import React from "react";
//import { PieceStyled } from "./components/App.styled";

class GameManager {
  players: number;
  difficulty: number;

  constructor(players: number, difficulty: number) {
    this.players = players;
    this.difficulty = difficulty;
  }
}

export default GameManager;
