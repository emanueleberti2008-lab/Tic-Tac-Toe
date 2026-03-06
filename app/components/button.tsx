export function Button(props: {
  type: "submit" | "button" | "reset";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      className="border border-gray-800 bg-gray-200 text-black disabled:opacity-50"
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}
