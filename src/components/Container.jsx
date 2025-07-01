import { useState } from "react";
import PersonalData from "./PersonalData";
import Education from "./Education";

export default function Container() {
  const [isSaved, setIsSaved] = useState(false);

  const saveInputFields = (e) => {
    if (!isSaved) {
      const form = e.target.closest("form");
      if (!form.checkValidity()) {
        return;
      }
    }

    e.preventDefault();
    setIsSaved(!isSaved);
  };

  return (
    <>
      <PersonalData isSaved={isSaved} saveInputFields={saveInputFields} />
      <Education isSaved={isSaved} saveInputFields={saveInputFields} />
    </>
  );
}
