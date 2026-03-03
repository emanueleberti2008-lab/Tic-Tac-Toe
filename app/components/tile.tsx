import { useState } from "react";

type Props = {
  Symbol: string;
  onClick: () => void;
}

export function TileXoO(props: Props) {
  if(props.Symbol !== null) return;
  return <button onClick={props.onClick}>{props.Symbol}</button>;
}