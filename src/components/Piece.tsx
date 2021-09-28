import React from "react";
import { PieceStyled } from "./App.styled";

type SquareProps = {
  piece: any;
  choosePiece: () => void;
};

const BoardPiece = ({ piece, choosePiece }: SquareProps) => {
  return (
    <PieceStyled
      onClick={choosePiece}
      color={piece === 1 ? "#615eff" : piece === 2 ? "#ff5e5e" : "#d1d1d1"}
    ></PieceStyled>
  );
};

export default BoardPiece;
