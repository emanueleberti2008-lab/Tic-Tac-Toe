export function Input(props: {
  name: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}) {
  return (
    <input
      className="border border-blue-500 rounded-md px-3 py-1.5 disabled:opacity-60 disabled:cursor-not-allowed bg-white text-black"
      name={props.name}
      required={props.required}
      value={props.value}
      onChange={
        props.onChange ? (e) => props.onChange!(e.target.value) : undefined
      }
      disabled={props.disabled}
    />
  );
}
