import react, { useState } from "react";

function Textarea({ value, defaultValue, ...rest }) {
  const [inputValue, setInputValue] = useState(value ? value : "");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return <textarea value={inputValue} onChange={handleChange} {...rest} />;
}

export default Textarea;
