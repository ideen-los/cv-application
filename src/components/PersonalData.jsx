import { useState } from "react";
import Form from "./Form";

export default function PersonalData({ isSaved, saveInputFields, sectionKey }) {
  const inputFields = [
    { name: "firstName", label: "First name" },
    { name: "lastName", label: "Last name" },
    { type: "tel", name: "phone", label: "Phone" },
    { type: "email", name: "email", label: "E-Mail" },
  ];

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
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
      <h1>Personal information</h1>
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
