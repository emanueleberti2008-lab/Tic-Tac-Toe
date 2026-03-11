import { Board } from "./board";
import { Button } from "./button";
import { Scoreboard } from "./scoreboard";
import { TileValue } from "../types/tile-values";
import { PlayerScore } from "../utils/score-utils";

type Props = {
  player1: string;
  player2: string;
  currentPlayer: TileValue;
  board: (TileValue | null)[][];
  winner: TileValue | null;
  canUndo: boolean;
  scores: PlayerScore[];
  onPlay: (nextBoard: (TileValue | null)[][], nextPlayer: TileValue) => void;
  onUndo: () => void;
  onRestart: () => void;
  onResetPlayers: () => void;
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

function isBoardFull(board: (TileValue | null)[][]): boolean {
  return board.every((row) => row.every((cell) => cell !== null));
}

export function PlayingBoard(props: Props) {
  const isDraw = !props.winner && isBoardFull(props.board);

  return (
    <div className="flex items-start justify-center gap-6 p-6">
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-lg font-semibold mb-4">Tic Tac Toe</h1>

        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4 w-fit aspect-square justify-center text-black">
          {!props.winner && !isDraw && (
            <div className="w-full flex items-center">
              <p className="font-medium">
                {`Turno: ${getCurrentName(props.currentPlayer, props.player1, props.player2)} (${props.currentPlayer})`}
              </p>
            </div>
          )}

          {props.winner ? (
            <div className="flex flex-col items-center gap-3">
              <p className="font-medium">{`Ha vinto ${getWinnerName(props.winner, props.player1, props.player2)} (${props.winner})`}</p>
              <div className="flex gap-3">
                <Button
                  type="button"
                  label="Ricomincia"
                  onClick={props.onRestart}
                />
                <Button
                  type="button"
                  label="Reset giocatori"
                  onClick={props.onResetPlayers}
                />
              </div>
            </div>
          ) : isDraw ? (
            <div className="flex flex-col items-center gap-3">
              <p className="font-medium">Pareggio! Vuoi ricominciare?</p>
              <div className="flex gap-3">
                <Button
                  type="button"
                  label="Ricomincia"
                  onClick={props.onRestart}
                />
                <Button
                  type="button"
                  label="Reset giocatori"
                  onClick={props.onResetPlayers}
                />
              </div>
            </div>
          ) : null}

          <Board
            board={props.board}
            currentPlayer={props.currentPlayer}
            winner={props.winner}
            onPlay={(nextBoard) =>
              props.onPlay(nextBoard, props.currentPlayer === "X" ? "O" : "X")
            }
          />

          {!props.winner && !isDraw && (
            <div className="w-full flex justify-end">
              <Button
                type="button"
                label="Annulla mossa precedente"
                onClick={props.onUndo}
                disabled={!props.canUndo}
              />
            </div>
          )}
        </div>
      </div>
      <Scoreboard scores={props.scores} />
    </div>
  );
}
