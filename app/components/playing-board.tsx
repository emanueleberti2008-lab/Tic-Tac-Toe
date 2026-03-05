import { Board } from "./board";
import { UndoMoveButton } from "./undo-move-button";
import { TileValue } from "../types/tile-values";

type Props = {
  player1: string;
  player2: string;
  currentPlayer: TileValue;
  board: (TileValue | null)[][];
  winner: TileValue | null;
  onPlay: (nextBoard: (TileValue | null)[][], nextPlayer: TileValue) => void;
  onReset: () => void;
  onUndo: () => void;
};

export function Playing(props: Props) {
  const currentName =
    props.currentPlayer === "X" ? props.player1 : props.player2;
  const winnerName = props.winner === "X" ? props.player1 : props.player2;

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {props.winner ? (
        <p>
          Ha vinto {winnerName} ({props.winner})
        </p>
      ) : (
        <p>
          Turno: {currentName} ({props.currentPlayer})
        </p>
      )}
      <Board
        board={props.board}
        currentPlayer={props.winner ? null : props.currentPlayer}
        onPlay={(nextBoard: (TileValue | null)[][]) =>
          props.onPlay(nextBoard, props.currentPlayer === "X" ? "O" : "X")
        }
      />
      <UndoMoveButton onUndo={props.onUndo} />
    </>
  );
}
