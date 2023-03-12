import NameForm from "./NameForm.jsx";
import PriorityForm from "./PriorityForm.jsx";
import StateForm from "./StateForm.jsx";
import ButtonForm from "./ButtonForm.jsx";

import { useState } from "react";

export default function SearchControls() {

  const [values, setValues] = useState({ name: "", priority: "", state : "" });

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setValues( prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }
  const handleButtonChange = () => {
    alert("Nombre: " + values.name + "\nPriority: " + values.priority + "\nState: " + values.state);
  };

  return (
    <form className="controls">
      <NameForm sendData={handleOnChange} />
      <PriorityForm sendData={handleOnChange} />
      <StateForm sendData={handleOnChange} />
      <ButtonForm sendData={handleButtonChange} message={"Search"}/>
    </form>
  );
}
