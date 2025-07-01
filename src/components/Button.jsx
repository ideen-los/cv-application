export default function Button({ type, onClick, isSaved }) {
  let button;

  if (isSaved) {
    button = (
      <button className="saved" type={type} onClick={onClick}>
        Edit
      </button>
    );
  } else {
    button = (
      <button type={type} onClick={onClick}>
        Save
      </button>
    );
  }

  return button;
}
