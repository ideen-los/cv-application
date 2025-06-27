export default function InputField({
  name,
  label,
  value,
  type = "text",
  onChange,
}) {
  return (
    <label>
      {label}{" "}
      <input name={name} value={value} type={type} onChange={onChange} />
    </label>
  );
}
