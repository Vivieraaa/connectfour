import React from "react";
import { Container, Board, Row } from "./components/App.styled";
import BoardPiece from "./components/Piece";

const rows = "a".repeat(6).split("");
const cols = "a".repeat(7).split("");

function App() {
  const [board, setBoard] = React.useState(rows.map(() => cols.map(() => "")));

  const choosePiece = (y: number, x: number) => {};

  return (
    <Container>
      <Board>
        {rows.map((_, indexY) => (
          <Row key={indexY}>
            {cols.map((_, indexX) => (
              <BoardPiece
                key={indexX}
                piece={board[indexY][indexX]}
                choosePiece={() => {
                  choosePiece(indexY, indexX);
                }}
              />
            ))}
          </Row>
        ))}
      </Board>
    </Container>
  );
}

export default App;
