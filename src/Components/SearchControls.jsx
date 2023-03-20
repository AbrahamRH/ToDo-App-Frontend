import NameForm from "./NameForm.jsx";
import PriorityForm from "./PriorityForm.jsx";
import StateForm from "./StateForm.jsx";
import ButtonForm from "./ButtonForm.jsx";

import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodosContext";

export default function SearchControls() {
  const [values, setValues] = useState({ name: "", priority: "", state: "" });
  const { searchTodos } = useContext(TodoContext);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleButtonChange = (e) => {
    e.preventDefault();
    searchTodos(values.name, values.priority, values.state);
  };

  return (
    <form className="controls">
      <NameForm sendData={handleOnChange} isRequired={false} />
      <PriorityForm sendData={handleOnChange} />
      <StateForm sendData={handleOnChange} />
      <ButtonForm sendData={handleButtonChange} message={"Search"} />
    </form>
  );
}
