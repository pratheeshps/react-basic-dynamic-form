import react, { useState } from "react";

function Checkbox({ value, defaultValue, ...rest }) {
  const [inputValue, setInputValue] = useState(value ? value : false);

  const handleChange = (e) => {
    setInputValue(e.target.checked);
  };

  return (
    <input
      type="checkbox"
      value={inputValue}
      onChange={handleChange}
      {...rest}
    />
  );
}

export default Checkbox;
