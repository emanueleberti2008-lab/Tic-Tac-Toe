import { TileValue } from "../types/tile-values";

export function findWinner(
  board: (TileValue | null)[][],
  winLength: number,
  player: TileValue,
): boolean {
  const size = board.length;

  for (let r = 0; r < size; r++) {
    let count = 1;
    for (let c = 0; c < size - 1; c++) {
      if (board[r][c] === player && board[r][c] === board[r][c + 1]) count++;
      if (count >= winLength) return true;
    }
  }

  for (let c = 0; c < size; c++) {
    let count = 1;
    for (let r = 0; r < size - 1; r++) {
      if (board[r][c] === player && board[r][c] === board[r + 1][c]) count++;
      if (count >= winLength) return true;
    }
  }

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      let count = 1;
      for (let i = 1; r + i < size && c + i < size; i++) {
        count =
          board[r + i - 1][c + i - 1] === player &&
          board[r + i - 1][c + i - 1] === board[r + i][c + i]
            ? count + 1
            : 1;
        if (count >= winLength) return true;
      }
    }
  }

  for (let r = 0; r < size; r++) {
    for (let c = size - 1; c >= 0; c--) {
      let count = 1;
      for (let i = 1; r + i < size && c - i >= 0; i++) {
        count =
          board[r + i - 1][c - i + 1] === player &&
          board[r + i - 1][c - i + 1] === board[r + i][c - i]
            ? count + 1
            : 1;
        if (count >= winLength) return true;
      }
    }
  }

  return false;
}
