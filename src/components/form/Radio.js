import react, { useState } from "react";
import Label from "./Label";

function Radio({ id, value, defaultValue, options, ...rest }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex">
      {options.split(",").map((option) => {
        const groupid = `${id}-${option.replace(/\s/g, "")}`;
        return (
          <div key={`${groupid}-group`}>
            <Label htmlFor={groupid} labelName={option} />
            <input
              id={groupid}
              name={id}
              type="radio"
              checked={inputValue === option}
              value={option}
              onChange={handleChange}
              {...rest}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Radio;
