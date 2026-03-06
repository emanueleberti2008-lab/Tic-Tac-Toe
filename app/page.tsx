"use client";

import { useState } from "react";
import { PlayersNameFrom } from "./components/players-name-from";
import { RandomFirstPlayer } from "./components/random-first-player";
import { BoardSizePicker } from "./components/board-size-picker";
import { PlayingBoard } from "./components/playing-board";
import { TileValue } from "./types/tile-values";
import { BoardSize } from "./types/board-size";
import { findWinner } from "./utils/find-winner";
import { boardUtils } from "./utils/board-utils";

type GameState = {
  player1: string;
  player2: string;
  currentPlayer: TileValue | null;
  size: BoardSize | null;
  board: (TileValue | null)[][];
  winner: TileValue | null;
  history: (TileValue | null)[][][];
};

export default function Page() {
  const [state, setState] = useState<GameState>({
    player1: "",
    player2: "",
    currentPlayer: null,
    size: null,
    board: [],
    winner: null,
    history: [],
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
    setState((prev) => ({
      ...prev,
      size,
      board: boardUtils.empty(size),
      history: [],
      winner: null,
    }));
  }

  function handlePlay(
    nextBoard: (TileValue | null)[][],
    nextPlayer: TileValue,
  ) {
    if (state.currentPlayer === null) return;
    if (state.size === null) return;
    const hasWinner = findWinner(nextBoard, state.size, state.currentPlayer);
    const winner = hasWinner ? state.currentPlayer : null;
    setState((prev) => ({
      ...prev,
      board: nextBoard,
      currentPlayer: winner ? prev.currentPlayer : nextPlayer,
      winner,
      history: [...prev.history, boardUtils.deepCopy(prev.board)],
    }));
  }

  function handleRestart() {
    setState((prev) => {
      if (prev.size === null) return prev;
      return {
        ...prev,
        board: boardUtils.empty(prev.size),
        winner: null,
        currentPlayer: prev.currentPlayer,
        history: [],
      };
    });
  }

  function handleUndo() {
    setState((prev) => {
      if (prev.history.length === 0) return prev;
      const previousBoard = prev.history[prev.history.length - 1];
      return {
        ...prev,
        board: previousBoard,
        history: prev.history.slice(0, -1),
        winner: null,
        currentPlayer: prev.currentPlayer === "X" ? "O" : "X",
      };
    });
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
      {state.player1 && state.currentPlayer && state.size && (
        <PlayingBoard
          player1={state.player1}
          player2={state.player2}
          currentPlayer={state.currentPlayer}
          board={state.board}
          winner={state.winner}
          canUndo={state.history.length > 0}
          onPlay={handlePlay}
          onUndo={handleUndo}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}
