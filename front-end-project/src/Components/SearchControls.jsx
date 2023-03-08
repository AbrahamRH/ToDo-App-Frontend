import NameForm from "./NameForm.jsx";
import PriorityForm from "./PriorityForm.jsx";
import StateForm from "./StateForm.jsx";

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
  const handleButtonChange = (e) => {
    alert("Nombre: " + values.name + "\nPriority:" + values.priority + "\nState:" + values.state);
  };

  return (
    <form>
      <NameForm enviarDatos={handleOnChange} />
      <br />
      <PriorityForm enviarDatos={handleOnChange} />
      <br />
      <StateForm enviarDatos={handleOnChange} />
      <br />
      <button onClick={handleButtonChange}>Enviar</button>
    </form>
  );
}
