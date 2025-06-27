import { useState } from "react";
import InputField from "./InputField";

export default function PersonalData() {
  const [isSaved, setIsSaved] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const saveInputFields = (e) => {
    e.preventDefault();
    setIsSaved(!isSaved);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  let content;

  if (isSaved) {
    content = (
      <>
        {data.firstName}

        <button type="submit" onClick={saveInputFields}>
          Edit
        </button>
      </>
    );
  } else {
    content = (
      <form>
        <InputField
          name="firstName"
          label="First name"
          value={data.firstName}
          onChange={handleInput}
        />

        <button type="submit" onClick={saveInputFields}>
          Save
        </button>
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
