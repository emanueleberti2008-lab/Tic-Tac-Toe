"use client";

import { useState } from "react";

type GameState = {
  player1: string;
  player2: string;
};

export default function Page() {
  const [state, setState] = useState<GameState>({
    player1: "",
    player2: "",
  });

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <p>
        Nome giocatore 1 (X):{" "}
        <input
          value={state.player1}
          onChange={(e) => setState({ ...state, player1: e.target.value })}
        />
      </p>
      <p>
        Nome giocatore 2 (O):{" "}
        <input
          value={state.player2}
          onChange={(e) => setState({ ...state, player2: e.target.value })}
        />
      </p>
      <button disabled={state.player1 === "" || state.player2 === ""}>
        Continua
      </button>
    </div>
  );
}
