import { useState } from "react";
import Form from "./Form";

export default function Education({ isSaved, saveInputFields }) {
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
    <section className="personal-data">
      <h1>Your education</h1>
      <Form
        isSaved={isSaved}
        saveInputFields={saveInputFields}
        handleInput={handleInput}
        inputFields={inputFields}
        data={data}
      />
    </section>
  );
}
