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
        {Object.keys(data).map((value) => {
          {
            /*
            For each key/value pair in the data object, find the corresponding label from the inputFields array. 
            Then print the label and the value from the corresponding data object's key.
            */
          }
          const field = inputFields.find((field) => field.name === value);
          const label = field ? field.label : value;

          return (
            <Fragment key={value}>
              <div className="text">
                {label}
                <br />
                <span>{data[value]}</span>
              </div>
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
          {
            /* Print each element in the inputFields array as <InputField /> and fill it with the data defined in the array. */
          }
          return (
            <Fragment key={field.name}>
              <InputField {...field} value={data[field.name]} />
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
