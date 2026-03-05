"use client";

import { useState } from "react";
import { PlayersNameFrom } from "./components/players-name-from";
import { RandomFirstPlayer } from "./components/random-first-player";
import { TileValue } from "./types/tile-values";

type GameState = {
  player1: string;
  player2: string;
  currentPlayer: TileValue | null;
};

export default function Page() {
  const [state, setState] = useState<GameState>({
    player1: "",
    player2: "",
    currentPlayer: null,
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
    </>
  );
}
