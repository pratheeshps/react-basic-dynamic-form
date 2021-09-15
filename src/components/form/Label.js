import react from "react";

function Label({ labelName, ...rest }) {
  return <label {...rest}>{labelName}</label>;
}

export default Label;
