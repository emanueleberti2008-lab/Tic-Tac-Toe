export function Input(props: { name: string; required?: boolean }) {
  return (
    <input
      className="border border-blue-500"
      name={props.name}
      required={props.required}
    />
  );
}
