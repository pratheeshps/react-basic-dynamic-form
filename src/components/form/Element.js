import react from "react";
import { Label, Input, Checkbox, Radio } from "./fields";
import { TEXT, EMAIL, NUMBER, CHECKBOX, RADIO } from "./constants";

function Element({ element, formState, onBlurHandler }) {
  // Renders the label element
  function renderLabel({ labelName, uid }) {
    return <Label className="mb-5" htmlFor={uid} labelName={labelName} />;
  }

  // Renders the field element based on type
  function renderElement() {
    const { type, uid, defaultValue, labelName, ...propsToSend } = element;
    const value = formState[uid] ? formState[uid] : defaultValue;
    const onBlur = (e) => onBlurHandler(uid, e.target.value);

    switch (type) {
      case TEXT:
      case EMAIL:
      case NUMBER:
        return (
          <>
            {labelName && renderLabel(element)}
            <Input id={uid} value={value} onBlur={onBlur} {...propsToSend} />
          </>
        );
      case CHECKBOX:
        return (
          <div className="flex">
            {element.labelName && renderLabel(element)}
            <Checkbox id={uid} value={value} onBlur={onBlur} {...propsToSend} />
          </div>
        );
      case RADIO:
        return (
          <>
            {element.labelName && renderLabel(element)}
            <Radio id={uid} value={value} onBlur={onBlur} {...propsToSend} />
          </>
        );
      default:
        return <></>;
    }
  }
  return <>{renderElement()}</>;
}

export default Element;
