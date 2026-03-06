import { Tile } from "./tile";
import { TileValue } from "../types/tile-values";

type Props = {
  board: (TileValue | null)[][];
  currentPlayer: TileValue;
  winner: TileValue | null;
  onPlay: (nextBoard: (TileValue | null)[][]) => void;
};

export function Board(props: Props) {
  function handleClick(x: number, y: number) {
    if (props.board[x][y] !== null) return;
    const nextBoard = props.board.map((row, rowIndex) =>
      row.map((value, colIndex) =>
        rowIndex === x && colIndex === y ? props.currentPlayer : value,
      ),
    );
    props.onPlay(nextBoard);
  }

  return (
    <div className="shadow-xl inline-block">
      {props.board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((value, colIndex) => (
            <Tile
              key={colIndex}
              value={value}
              onClick={() => handleClick(rowIndex, colIndex)}
              disabled={props.winner !== null || value !== null}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
