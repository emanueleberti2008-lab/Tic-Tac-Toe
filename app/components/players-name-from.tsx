import { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";

type Props = {
  onDone: (players: { player1: string; player2: string }) => void;
};

export function PlayersNameFrom(props: Props) {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    try {
      if (player1.trim().toLowerCase() === player2.trim().toLowerCase()) {
        throw new Error("I nomi dei giocatori devono essere diversi!");
      }
      setSubmitted(true);
      props.onDone({ player1, player2 });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-96">
      <h1 className="text-lg font-semibold mb-1">
        Inserisci i nomi dei giocatori
      </h1>
      <p className="flex items-center gap-4">
        Nome giocatore 1 (X):
        <Input
          name="player1"
          value={player1}
          onChange={setPlayer1}
          required
          disabled={submitted}
        />
      </p>
      <p className="flex items-center gap-4">
        Nome giocatore 2 (O):
        <Input
          name="player2"
          value={player2}
          onChange={setPlayer2}
          required
          disabled={submitted}
        />
      </p>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" label="Conferma nomi" disabled={submitted} />
    </form>
  );
}
