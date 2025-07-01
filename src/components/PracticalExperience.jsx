import { useState } from "react";
import Form from "./Form";

export default function PracticalExperience({
  isSaved,
  saveInputFields,
  sectionKey,
}) {
  const inputFields = [
    { name: "companyName", label: "Company name" },
    { name: "positionTitle", label: "Position title" },
    { name: "responsibilities", label: "Main responsibilities" },
    { type: "date", name: "startDate", label: "Start date" },
    { type: "date", name: "endDate", label: "End date" },
  ];

  const [data, setData] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
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
      <h1>Pracitical Experience</h1>
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
