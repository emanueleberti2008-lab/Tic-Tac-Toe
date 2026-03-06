import { boardSizes, BoardSize } from "../types/board-size";
import { Button } from "./button";
import { useState } from "react";

type Props = {
  onSizeSelected: (data: { size: BoardSize }) => void;
};

export function BoardSizePicker(props: Props) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(formData: FormData) {
    const size = Number(formData.get("size")) as BoardSize;
    setSubmitted(true);
    props.onSizeSelected({ size });
  }

  return (
    <form
      action={handleSubmit}
      className="flex flex-col items-center gap-2 p-4"
    >
      <h1 className="text-lg font-semibold">
        Scegli la grandezza della tavola da gioco
      </h1>
      <p className="flex items-center gap-3">
        Grandezza della board:
        <select
          className="border border-blue-500 rounded-md px-3 py-1.5 bg-white focus:outline-none text-black disabled:opacity-60"
          name="size"
          disabled={submitted}
        >
          {boardSizes.map((size) => (
            <option key={size} value={size}>
              {size}x{size}
            </option>
          ))}
        </select>
      </p>
      <Button type="submit" label="Inizia partita" disabled={submitted} />
    </form>
  );
}
