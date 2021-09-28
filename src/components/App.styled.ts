import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Board = styled.div`
  width: 700px;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: #ffebfa;
  border: 1px solid black;
  border-radius: 3%;
`;

export const Row = styled.div`
  display: flex;
  flex: calc(100/60);
  flex-direction: row;
`;

export const Col = styled.div`
  display: flex;
  flex: calc(100/70);
  flex-direction: column;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const PieceStyled = styled.div<{ color: string }>`
  height:80%;
  width:80%;
  background-color: ${(props) => props.color};
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
`;