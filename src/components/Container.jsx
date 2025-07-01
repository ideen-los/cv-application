import { useState } from "react";
import PersonalData from "./PersonalData";
import Education from "./Education";
import PracticalExperience from "./PracticalExperience";
import "../styles/styles.scss";

export default function Container() {
  const [isSaved, setIsSaved] = useState({
    personalData: false,
    education: false,
    practicalExperience: false,
  });

  const saveInputFields = (e, sectionKey) => {
    if (!isSaved[sectionKey]) {
      const form = e.target.closest("form");
      if (!form.checkValidity()) {
        return;
      }
    }

    e.preventDefault();
    setIsSaved((currentState) => ({
      ...currentState,
      [sectionKey]: !currentState[sectionKey],
    }));
  };

  return (
    <>
      <PersonalData
        isSaved={isSaved.personalData}
        saveInputFields={saveInputFields}
        sectionKey="personalData"
      />
      <Education
        isSaved={isSaved.education}
        saveInputFields={saveInputFields}
        sectionKey="education"
      />
      <PracticalExperience
        isSaved={isSaved.practicalExperience}
        saveInputFields={saveInputFields}
        sectionKey="practicalExperience"
      />
    </>
  );
}
