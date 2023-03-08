import NameForm from "./NameForm.jsx";
import { useState } from "react";

export default function SearchControls() {
  const [values, setValues] = useState({ name: "" });
  const handleInputChange = (e) => {
    setValues({ name: e.target.value });
  };

  return (
    <form>
      <NameForm enviarDatos={handleInputChange} />
      <button
        onClick={() => {
          alert("El mensaje: " + values.name);
        }}
      >Enviar</button>
    </form>
  );
}
