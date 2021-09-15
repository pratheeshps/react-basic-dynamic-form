import react, { useState } from "react";

function Input({ value, defaultValue, ...rest }) {
  const [inputValue, setInputValue] = useState(value ? value : "");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return <input value={inputValue} onChange={handleChange} {...rest} />;
}

export default Input;
