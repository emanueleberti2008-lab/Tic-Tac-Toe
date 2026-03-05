import { TileValue } from "../types/tile-values";

type Props = {
  value: TileValue | null;
  onClick: () => void;
};

export function Tile(props: Props) {
  return (
    <button
      className="border-2 border-blue-500 bg-white w-12 h-12 text-black disabled:opacity-100 disabled:text-black"
      disabled={props.value !== null}
      onClick={props.onClick}
    >
      {props.value ?? ""}
    </button>
  );
}
