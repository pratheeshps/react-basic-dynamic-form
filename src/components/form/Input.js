import react, { useEffect, useState } from "react";

function Input({ value, ...rest }) {
  const [inputValue, setInputValue] = useState(value);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {});
  return <input value={inputValue} onChange={handleChange} {...rest} />;
}

export default Input;
