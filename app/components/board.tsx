import { Tile } from "./tile";
import { TileValue } from "../types/tile-values";

type Props = {
  board: TileValue[][];
  currentPlayer: TileValue;
  onPlay: (nextBoard: TileValue[][]) => void;
};

export function Board(props: Props) {
  function handleClick(x: number, y: number) {
    const nextBoard = props.board.map((row, rowIndex) =>
      row.map((value, colIndex) =>
        rowIndex === x && colIndex === y ? props.currentPlayer : value,
      ),
    );
    props.onPlay(nextBoard);
  }

  return (
    <>
      {props.board.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((value, colIndex) => (
            <Tile
              key={colIndex}
              value={value}
              onClick={() => handleClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </>
  );
}
