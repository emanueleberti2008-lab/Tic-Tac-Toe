export function Button(props: {
  type: "submit" | "button" | "reset";
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="border border-gray-800 bg-gray-200 text-black"
      type={props.type}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
