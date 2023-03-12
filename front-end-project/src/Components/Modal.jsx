import NameInput from "./NameForm";
import DateInput from "./DateInput";
import Button from "./ButtonForm";

import { useState } from "react";

export default function Modal({ toggleModal }) {
  const [todoValues, setTodoValues] = useState({
    name: "",
    priority: "",
    dueDate: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTodoValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleButtonChange = (e) => {
    alert(
      "Nombre: " +
        todoValues.name +
        "\nPriority: " +
        todoValues.priority +
        "\nDueDate: " +
        todoValues.dueDate
    );
  };

  return (
    <div className="modal">
      <div className="overlay" onClick={toggleModal}></div>
      <div className="modal-content">
        <button className="close-modal" onClick={toggleModal}>
          close
        </button>
        <h2>Create a task</h2>
        <form className="modal_controls">
          <NameInput sendData={handleOnChange} />
          <PrioritySelect sendData={handleOnChange} />
          <DateInput sendData={handleOnChange} />
          <Button sendData={handleButtonChange} message={"Create To Do"} />
        </form>
      </div>
    </div>
  );
}


function PrioritySelect ({sendData}) {
  return (
    <>
      <label htmlFor="priority" className="controls_label_priority">Priority:</label>
      <select className="controls_priority" name="priority" onChange={sendData}>
        <option value="LOW">Low</option>
        <option value="MEDIUM">Medium</option>
        <option value="HIGH">High</option>
      </select>
    </>
  )
}
