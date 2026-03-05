import { boardSizes, BoardSize } from "../types/board-size";
import { Button } from "./button";

type Props = {
  onSizeSelected: (data: { size: BoardSize }) => void;
};

export function BoardSizePicker(props: Props) {
  function handleSubmit(formData: FormData) {
    const size = Number(formData.get("size")) as BoardSize;
    props.onSizeSelected({ size });
  }

  return (
    <form action={handleSubmit} className="flex flex-col items-center gap-4">
      <h1>Scegli la grandezza della tavola da gioco</h1>
      <p>
        Grandezza della board:
        <select className="border border-blue-500" name="size">
          {boardSizes.map((size) => (
            <option key={size} value={size}>
              {size}x{size}
            </option>
          ))}
        </select>
      </p>
      <Button type="submit" label="Inizia partita" />
    </form>
  );
}
