import { Fragment } from "react";
import InputField from "./InputField";
import Button from "./Button";

export default function Form({
  isSaved,
  saveInputFields,
  handleInput,
  inputFields,
  data,
}) {
  let content;

  // Just show the input value (not the inputs themselves) when the content has been saved
  if (isSaved) {
    content = (
      <>
        {Object.keys(data).map((entry) => {
          return (
            <Fragment key={entry}>
              {data[entry]}
              <br />
            </Fragment>
          );
        })}
        <p>
          <Button type="button" onClick={saveInputFields} isSaved={isSaved} />
        </p>
      </>
    );
  } else {
    // If the content has NOT been saved, show the input fields
    content = (
      <form onChange={handleInput}>
        {inputFields.map((field) => {
          return (
            <Fragment key={field.name}>
              <InputField {...field} value={data[field.name]} />
              <br />
            </Fragment>
          );
        })}
        <p>
          <Button type="submit" onClick={saveInputFields} isSaved={isSaved} />
        </p>
      </form>
    );
  }

  return content;
}
