import react, { useState } from "react";
import Form from "./components/form/form";
import "./styles.css";

export default function App() {
  const formData = [
    {
      uid: "firstName",
      type: "text",
      labelName: "First name",
      defaultValue: "jhon",
      required: true
    },
    {
      uid: "lastName",
      type: "text",
      labelName: "Last name",
      defaultValue: "",
      required: true
    },
    {
      uid: "email",
      type: "email",
      labelName: "Email address",
      defaultValue: "",
      required: true
    },
    {
      uid: "isAdmin",
      type: "checkbox",
      labelName: "Is Administrator",
      defaultValue: false,
      required: false
    },
    {
      uid: "gender",
      type: "radio",
      labelName: "Gender",
      defaultValue: "Male",
      options: "Male,Female",
      required: false
    }
  ];
  const [formState, setFormState] = useState({ firstName: "jhon" });

  const updateFormState = ({ uid, value }) => {
    const newState = { ...formState, [uid]: value };
    setFormState(newState);
  };

  const submitAction = () => {
    console.log(formState);
  };

  return (
    <div className="App">
      <h1>Dynamic form</h1>
      <Form
        formData={formData}
        setFormState={updateFormState}
        submitAction={submitAction}
        formState={formState}
      />
      <div className="flex column align-items-start border-1 p-5">
        <h4 className="m-5">Submit data</h4>
        <code className="m-5">{JSON.stringify(formState, undefined, 4)}</code>
      </div>
    </div>
  );
}
