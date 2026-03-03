import { useState } from "react";

type Empty = {
  onClick: () => void;
}

type XoO = {
  turn: number;
  onPlay: () => void;
}

export function EmptyTile({ onClick }: Empty) {
  return (
    <button onClick={onClick}> </button>
  );
}

export function TileXoO({ turn, onPlay }: XoO) {
  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    if (value !== null) return;
    setValue(turn % 2 === 0 ? "X" : "O");
    onPlay();
  }

  return <button onClick={handleClick}>{value ?? " "}</button>;
}
