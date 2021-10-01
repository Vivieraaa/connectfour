import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const SelectorBox = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  background-color: #d470a2;
  border: 1px solid black;
  margin-bottom: 10px;
  border-radius: 15px;
`

export const ButtonBox = styled.div`
  display: flex;
  flex: 30%;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-left: 20px;
`

export const IncrementBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const Board = styled.div`
  width: 700px;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: #d470a2;
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

export const Button = styled.div`
  --color: black;
  --bg-color: #efefef;
  font-size: 3em;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  padding: 0.15em;
  color: var(--color);
  background-color: var(--bg-color);
  box-shadow: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.15s ease-in-out;

  :hover {
    box-shadow: 0 4px 1px rgba(0, 0, 0, 0.25);
    transform: translateY(-1px);
    background-color: var(--color);
    color: var(--bg-color);
  }

  :active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  }
`