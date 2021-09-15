import react, { useState } from "react";

function Select({ id, value, defaultValue, options, ...rest }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex">
      <select
        id={id}
        name={id}
        onChange={handleChange}
        value={inputValue}
        {...rest}
      >
        {options.split(",").map((option) => {
          const groupid = `${id}-${option.replace(/\s/g, "")}`;
          return (
            <option key={`${groupid}-group`} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
