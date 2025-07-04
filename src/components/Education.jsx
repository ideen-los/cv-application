import { useState } from "react";
import Form from "./Form";

export default function Education({ isSaved, saveInputFields, sectionKey }) {
  const inputFields = [
    { name: "schoolName", label: "School name" },
    { name: "studyTitle", label: "Title of study" },
    { type: "date", name: "dateOfStudy", label: "Date of study" },
  ];

  const [data, setData] = useState({
    schoolName: "",
    studyTitle: "",
    dateOfStudy: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((currentData) => {
      return {
        ...currentData,
        [name]: value,
      };
    });
  };

  return (
    <section className={sectionKey}>
      <h1>Education</h1>
      <Form
        isSaved={isSaved}
        saveInputFields={(e) => saveInputFields(e, sectionKey)}
        handleInput={handleInput}
        inputFields={inputFields}
        data={data}
      />
    </section>
  );
}
