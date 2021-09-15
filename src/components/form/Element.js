import react from "react";
import { Label, Input, Checkbox, Radio, Select, Textarea } from "./fields";
import {
  TEXT,
  EMAIL,
  NUMBER,
  PASSWORD,
  CHECKBOX,
  RADIO,
  SELECT,
  TEXTAREA
} from "./constants";

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
      case PASSWORD:
        return (
          <>
            {labelName && renderLabel(element)}
            <Input
              type={type}
              id={uid}
              value={value}
              onBlur={onBlur}
              {...propsToSend}
            />
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
      case SELECT:
        return (
          <Select id={uid} value={value} onBlur={onBlur} {...propsToSend} />
        );
      case TEXTAREA:
        return (
          <>
            {element.labelName && renderLabel(element)}
            <Textarea
              id={uid}
              value={value}
              onBlur={onBlur}
              {...propsToSend}
              rows="4"
              cols="50"
            />
          </>
        );
      default:
        return <></>;
    }
  }
  return <>{renderElement()}</>;
}

export default Element;
