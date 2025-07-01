export default function Button({ type, onClick, isSaved }) {
  return (
    <button type={type} onClick={onClick}>
      {isSaved ? "Edit" : "Save"}
    </button>
  );
}
