import { Board } from "./board";
import { Button } from "./button";
import { TileValue } from "../types/tile-values";

type Props = {
  player1: string;
  player2: string;
  currentPlayer: TileValue;
  board: (TileValue | null)[][];
  winner: TileValue | null;
  canUndo: boolean;
  onPlay: (nextBoard: (TileValue | null)[][], nextPlayer: TileValue) => void;
  onUndo: () => void;
  onRestart: () => void;
};

function getCurrentName(
  currentPlayer: TileValue,
  player1: string,
  player2: string,
): string {
  return currentPlayer === "X" ? player1 : player2;
}

function getWinnerName(
  winner: TileValue,
  player1: string,
  player2: string,
): string {
  return winner === "X" ? player1 : player2;
}

export function PlayingBoard(props: Props) {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      {props.winner ? (
        <>
          <p>{`Ha vinto il giocatore ${getWinnerName(props.winner, props.player1, props.player2)} (${props.winner})`}</p>
          <Button type="button" label="Ricomincia" onClick={props.onRestart} />
        </>
      ) : (
        <p>{`Turno: ${getCurrentName(props.currentPlayer, props.player1, props.player2)} (${props.currentPlayer})`}</p>
      )}
      <Board
        board={props.board}
        currentPlayer={props.currentPlayer}
        winner={props.winner}
        onPlay={(nextBoard: (TileValue | null)[][]) =>
          props.onPlay(nextBoard, props.currentPlayer === "X" ? "O" : "X")
        }
      />
      {!props.winner && (
        <Button
          type="button"
          label="Annulla ultima mossa"
          onClick={props.onUndo}
          disabled={!props.canUndo}
        />
      )}
    </>
  );
}
