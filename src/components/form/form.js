import react from "react";

import Element from "./Element";

function Form({ formData = [], formState, submitAction, setFormState }) {
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
        <div key={element.uid} className="flex column align-items-start m-5">
          <Element
            element={element}
            formState={formState}
            onBlurHandler={onBlurHandler}
          />
        </div>
      ))}
      <button className="flex m-5" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
