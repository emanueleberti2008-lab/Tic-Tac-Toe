"use client";

import { useState } from "react";
import { PlayersNameFrom } from "./components/players-name-from";
import { RandomFirstPlayer } from "./components/random-first-player";
import { BoardSizePicker } from "./components/board-size-picker";
import { TileValue } from "./types/tile-values";
import { BoardSize } from "./types/board-size";

type GameState = {
  player1: string;
  player2: string;
  currentPlayer: TileValue | null;
  size: BoardSize | null;
};

export default function Page() {
  const [state, setState] = useState<GameState>({
    player1: "",
    player2: "",
    currentPlayer: null,
    size: null,
  });

  function handleNames({
    player1,
    player2,
  }: {
    player1: string;
    player2: string;
  }) {
    setState((prev) => ({ ...prev, player1, player2 }));
  }

  function handleStart(firstPlayer: TileValue) {
    setState((prev) => ({ ...prev, currentPlayer: firstPlayer }));
  }

  function handleSize({ size }: { size: BoardSize }) {
    setState((prev) => ({ ...prev, size }));
  }

  return (
    <>
      {!state.player1 && <PlayersNameFrom onDone={handleNames} />}
      {state.player1 && !state.currentPlayer && (
        <RandomFirstPlayer
          player1={state.player1}
          player2={state.player2}
          onPick={handleStart}
        />
      )}
      {state.player1 && state.currentPlayer && !state.size && (
        <BoardSizePicker onSizeSelected={handleSize} />
      )}
    </>
  );
}
