import React from "react";
import { GoPlus, GoDash } from "react-icons/go";
import {
  Container,
  Board,
  Row,
  Col,
  Button,
  SelectorBox,
  ButtonBox,
  IncrementBox,
} from "./components/App.styled";
import BoardPiece from "./components/Piece";

const rows = "a".repeat(6).split("");
const cols = "a".repeat(7).split("");

function App() {
  const [board, setBoard] = React.useState(rows.map(() => cols.map(() => 0)));
  const [difficulty, setDifficulty] = React.useState(1);
  const [players, setPlayers] = React.useState(1);
  const [curHover, setCurHover] = React.useState(-1);
  const [currentPlayer, setCurrentPlayer] = React.useState(1);

  const adjustDiff = (a: number) => () => {
    setDifficulty(Math.max(1, Math.min(2, difficulty + a)));
  };

  const adjustPlayers = (a: number) => () => {
    setPlayers(Math.max(1, Math.min(2, players + a)));
  };

  const shouldBeGhost = (row: number, column: number): boolean => {
    if (curHover !== column) {
      return false;
    }

    let foundRow = 0;

    for (let checkRow = board.length - 1; checkRow >= 0; checkRow--) {
      const curRow = board[checkRow];
      if (curRow[column] !== 0) {
        continue;
      } else if (checkRow === row) {
        if (foundRow === 0) {
          foundRow = 1;
          return true;
        }
      } else {
        return false;
      }
    }
    return false;
  };

  const choosePiece = (y: number, x: number) => {
    if (players === 2) {
      let foundRow = 0;
      for (let checkRow = board.length - 1; checkRow >= 0; checkRow--) {
        const curRow = board[checkRow];
        if (curRow[x] === 0) {
          if (foundRow === 0) {
            foundRow = 1;
            curRow[x] = currentPlayer;
            if (currentPlayer === 1) {
              setCurrentPlayer(2);
            } else {
              setCurrentPlayer(1);
            }
          }
        }
      }
    }
  };

  const reset = () => {
    setBoard(rows.map(() => cols.map(() => 0)));
    setCurrentPlayer(1);
  };

  return (
    <Container>
      <SelectorBox>
        <ButtonBox>
          <Button onClick={adjustDiff(-1)}>
            <GoDash />
          </Button>
          <IncrementBox>
            Difficulty
            <br />
            {difficulty}
          </IncrementBox>
          <Button onClick={adjustDiff(1)}>
            <GoPlus />
          </Button>
        </ButtonBox>
        <ButtonBox onClick={reset} style={{ cursor: "pointer" }}>
          Reset
        </ButtonBox>
        <ButtonBox>
          <Button onClick={adjustPlayers(-1)}>
            <GoDash />
          </Button>
          <IncrementBox>
            Players
            <br />
            {players}
          </IncrementBox>
          <Button onClick={adjustPlayers(1)}>
            <GoPlus />
          </Button>
        </ButtonBox>
      </SelectorBox>
      <Board>
        {rows.map((_, indexY) => (
          <Row key={indexY}>
            {cols.map((_, indexX) => (
              <Col
                key={indexX}
                onMouseOver={() => {
                  setCurHover(indexX);
                }}
                onMouseOut={() => {
                  setCurHover(-1);
                }}
              >
                <BoardPiece
                  piece={board[indexY][indexX]}
                  choosePiece={() => {
                    choosePiece(indexY, indexX);
                  }}
                  isGhost={shouldBeGhost(indexY, indexX)}
                  currentPlayer={currentPlayer}
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
