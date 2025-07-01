import { useState } from "react";

export default function Section({ children }) {
  const [isSaved, setIsSaved] = useState(false);

  let content;

  if (isSaved) {
    content = (
      <>
        {data.firstName + " " + data.lastName}
        <br />
        {data.phone}
        <br />
        {data.email}
        <p>
          <button type="submit" onClick={saveInputFields}>
            Edit
          </button>
        </p>
      </>
    );
  } else {
    content = (
      <form>
        <p>
          <button type="submit" onClick={saveInputFields}>
            Save
          </button>
        </p>
      </form>
    );
  }

  return (
    <section className="personal-data">
      <h1>Your personal data</h1>
      {content}
    </section>
  );
}
