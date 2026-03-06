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
  const [confirmed, setConfirmed] = useState(false);

  function handleClick() {
    if (firstPlayer !== null) return;
    const choice = Math.random() < 0.5 ? "X" : "O";
    setFirstPlayer(choice);
  }

  function handleConfirm() {
    if (!firstPlayer) return;
    setConfirmed(true);
    props.onPick(firstPlayer);
  }

  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <h1 className="text-lg font-semibold">Scelta casuale di chi inizia</h1>
      <p>
        {props.player1} (X) oppure {props.player2} (O)
      </p>
      <Button
        type="button"
        label="Chi inizia? (casuale)"
        onClick={handleClick}
        disabled={firstPlayer !== null}
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
            onClick={handleConfirm}
            disabled={confirmed}
          />
        </>
      )}
    </div>
  );
}
