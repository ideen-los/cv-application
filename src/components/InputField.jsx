export default function InputField({ label, name, value, type = "text" }) {
  return (
    <label>
      {label} <br />
      <input name={name} value={value} type={type} onChange={() => {}} />
    </label>
  );
}
