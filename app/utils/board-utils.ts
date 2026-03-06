import { TileValue } from "../types/tile-values";

export const boardUtils = {
  empty(size: number): (TileValue | null)[][] {
    return Array(size)
      .fill(null)
      .map(() => Array(size).fill(null));
  },

  deepCopy(board: (TileValue | null)[][]): (TileValue | null)[][] {
    return board.map((row) => [...row]);
  },
};
