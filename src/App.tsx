import React from "react";
import { Container, Board, Row, Col } from "./components/App.styled";
import BoardPiece from "./components/Piece";
import GameManager from "./GameManager";

const rows = "a".repeat(6).split("");
const cols = "a".repeat(7).split("");

function App() {
  let [board, setBoard] = React.useState(rows.map(() => cols.map(() => "")));

  const choosePiece = (y: number, x: number) => {};

  return (
    <Container>
      <Board>
        {rows.map((_, indexY) => (
          <Row key={indexY}>
            {cols.map((_, indexX) => (
              <Col key={indexX}>
                <BoardPiece
                  piece={board[indexY][indexX]}
                  choosePiece={() => {
                    choosePiece(indexY, indexX);
                  }}
                />
              </Col>
            ))}
          </Row>
        ))}
      </Board>
    </Container>
  );
}

export default App;
