import { Input } from "./input";
import { Button } from "./button";

type Props = {
  onDone: (players: { player1: string; player2: string }) => void;
};

type Pippo = {
  a: string;
  b: string;
  c: number;
};

export function PlayersNameFrom(props: Props) {
  function handleSubmit(formData: FormData) {
    const player1 = formData.get("player1");
    const player2 = formData.get("player2");

    // type guard should never happen
    if (player1 === null) throw new Error("[DEV] player1 is null");
    if (player2 === null) throw new Error("[DEV] player2 is null");

    props.onDone({ player1: player1 as string, player2: player2 as string });
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-4 w-96">
      <h1>Inserisi i nomi dei giocatori</h1>
      <p className="flex items-center gap-4">
        Nome giocatore 1 (X):
        <Input name="player1" required />
      </p>
      <p className="flex items-center gap-4">
        Nome giocatore 2 (O):
        <Input name="player2" required />
      </p>
      <Button type="submit" label="Cliccami" />
    </form>
  );
}
