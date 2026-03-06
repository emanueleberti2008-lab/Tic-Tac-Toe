import { TileValue } from "../types/tile-values";

type Props = {
  value: TileValue | null;
  onClick: () => void;
  disabled?: boolean;
};

export function Tile(props: Props) {
  return (
    <button
      className="border-2 border-blue-500 bg-white w-12 h-12 text-black text-lg disabled:opacity-100 disabled:text-black flex items-center justify-center"
      disabled={props.value !== null || props.disabled}
      onClick={props.onClick}
    >
      {props.value ?? ""}
    </button>
  );
}
