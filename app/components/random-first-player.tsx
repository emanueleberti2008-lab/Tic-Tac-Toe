import { useState } from "react";
import { Button } from "./button";
import { TileValue } from "../types/tile-values";

type Props = {
  player1: string;
  player2: string;
  onPick: (firstPlayer: "X" | "O") => void;
};

export function RandomFirstPlayer(props: Props) {
  const [firstPlayer, setFirstPlayer] = useState<TileValue | null>(null);

  function handleClick() {
    if (firstPlayer !== null) return;
    const choice = Math.random() < 0.5 ? "X" : "O";
    setFirstPlayer(choice);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>Scelta casuale di chi inizia</h1>
      <p>
        {props.player1} (X) oppure {props.player2} (O)
      </p>
      <Button
        type="button"
        label="Chi inizia? (casuale)"
        onClick={handleClick}
      />
      {firstPlayer && (
        <>
          <p>
            Inizia: {firstPlayer === "X" ? props.player1 : props.player2} (
            {firstPlayer})
          </p>
          <Button
            type="button"
            label="Continua"
            onClick={() => props.onPick(firstPlayer)}
          />
        </>
      )}
    </div>
  );
}
