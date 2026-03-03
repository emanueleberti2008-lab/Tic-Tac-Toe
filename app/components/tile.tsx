import { TileValue } from "../types/tile-values";

type Props = {
  value: TileValue | null;
  onClick: () => void;
};

export function Tile(props: Props) {
  return (
    <button disabled={props.value !== null} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
