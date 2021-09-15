import react from "react";
import { Label, Input } from "./fields";
import { TEXT, EMAIL, NUMBER } from "./constants";

function Form({ formData = [], formState, submitAction, setFormState }) {
  // Renders the label element
  function renderLabel({ labelName, uid }) {
    return <Label htmlFor={uid} labelName={labelName} />;
  }

  // Renders the field element based on type
  function renderElement(element) {
    const { type, uid, defaultValue } = element;
    const value = formState[uid] ? formState[uid] : defaultValue;
    const onBlur = (e) => onBlurHandler(uid, e.target.value);

    switch (type) {
      case TEXT:
      case EMAIL:
      case NUMBER:
        return <Input id={uid} value={value} onBlur={onBlur} {...element} />;
      default:
        return <></>;
    }
  }

  // Submit event listener
  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitAction) {
      submitAction();
    }
  };

  const onBlurHandler = (uid, value) => {
    setFormState({ uid, value });
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((element) => (
        <div className="flex column align-items-start m-5">
          {element.labelName && renderLabel(element)}
          {renderElement(element)}
        </div>
      ))}
      <button className="flex m-5" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
