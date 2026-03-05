import { Button } from "./button";

type Props = {
  onUndo: () => void;
};

export function UndoMoveButton(props: Props) {
  return (
    <Button
      type="button"
      label="Annulla l'ultima mossa"
      onClick={props.onUndo}
    />
  );
}
