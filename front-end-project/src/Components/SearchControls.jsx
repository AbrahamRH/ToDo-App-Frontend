import NameForm from "./NameForm.jsx";
import PriorityForm from "./PriorityForm.jsx";
import StateForm from "./StateForm.jsx";

import { useState } from "react";

export default function SearchControls() {

  const [values, setValues] = useState({ name: "", priority: "", state : "" });

  const handleNameChange = (e) => {
    setValues({name: e.target.value, priority: values.priority, state: values.state});
  };

  const handlePriorityChange = (e) => {
    setValues({name: values.name, priority: e.target.value, state: values.state});
  };

  const handleStateChange = (e) => {
    setValues({name: values.name, priority: values.priority, state: e.target.value});
  };

  const handleButtonChange = (e) => {
    alert("Nombre: " + values.name + "\nPriority:" + values.priority + "\nState:" + values.state);
  };

  return (
    <form>
      <NameForm enviarDatos={handleNameChange} />
      <br />
      <PriorityForm enviarDatos={handlePriorityChange} />
      <br />
      <StateForm enviarDatos={handleStateChange} />
      <br />
      <button onClick={handleButtonChange}>Enviar</button>
    </form>
  );
}
