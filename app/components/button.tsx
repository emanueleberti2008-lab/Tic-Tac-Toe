export function Button(props: {
  type: "submit" | "button" | "reset";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-200 text-black disabled:opacity-50 cursor-pointer hover:bg-gray-300 hover:scale-105 hover:shadow-md active:scale-95"
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}
