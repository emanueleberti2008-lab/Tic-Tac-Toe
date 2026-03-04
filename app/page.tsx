"use client";

import { PlayersNameFrom } from "./components/players-name-from";

export default function Page() {
  function handleNames(players: { player1: string; player2: string }) {}

  return <PlayersNameFrom onDone={handleNames} />;
}
