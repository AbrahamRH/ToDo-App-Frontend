import NameForm from "./NameForm.jsx";
import { useState } from "react";
import PriorityForm from "./PriorityForm.jsx";

export default function SearchControls() {
  const [values, setValues] = useState({ name: "", priority: "" });

  const handleNameChange = (e) => {
    setValues({name: e.target.value, priority: values.priority});
  };

  const handlePriorityChange = (e) => {
    setValues({name: values.name, priority: e.target.value});
  };

  const handleButtonChange = (e) => {
    alert("Nombre: " + values.name + "\nPriority:" + values.priority);
  };

  return (
    <form>
      <NameForm enviarDatos={handleNameChange} />
      <br />
      <PriorityForm enviarDatos={handlePriorityChange} />
      <button onClick={handleButtonChange}>Enviar</button>
    </form>
  );
}
