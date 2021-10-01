import React from "react";
import { PieceStyled } from "./App.styled";

type SquareProps = {
  piece: any;
  choosePiece: () => void;
  isGhost: boolean;
  currentPlayer: number;
};

const BoardPiece = ({
  piece,
  choosePiece,
  isGhost,
  currentPlayer,
}: SquareProps) => {
  let pieceColor =
    piece === 1 ? "#4b47ff" : piece === 2 ? "#ff4545" : "#d1d1d1";
  if (isGhost) {
    pieceColor = currentPlayer === 1 ? "#9896ff" : "#ff9696";
  }

  return <PieceStyled onClick={choosePiece} color={pieceColor}></PieceStyled>;
};

export default BoardPiece;
