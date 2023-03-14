import NameInput from "./NameForm";
import DateInput from "./DateInput";
import Button from "./ButtonForm";
import handleAPI from "../Utils/API";

import { useState, useContext } from "react";
import { TodoContext } from "../Context/TodosContext";

export default function Modal({ toggleModal, toCreateTodo, todoId }) {
  const { createTodo, updateTodo } = useContext(TodoContext);

  const [todoValues, setTodoValues] = useState({
    name: "",
    priority: "LOW",
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
    const todo = {
      name: todoValues.name,
      priority: todoValues.priority,
      dueDate: todoValues.dueDate,
    };

    if (todo.name != "") {
      if (toCreateTodo) {
        handleAPI("POST", "/todos", todo).then((data) => createTodo(data));
      } else {
        updateTodo(todoId, todo);
      }
    }
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
          <NameInput sendData={handleOnChange} isRequired={true} />
          <PrioritySelect sendData={handleOnChange} />
          <DateInput sendData={handleOnChange} />
          <Button sendData={handleButtonChange} message={"Create To Do"} />
        </form>
      </div>
    </div>
  );
}

function PrioritySelect({ sendData }) {
  return (
    <>
      <label htmlFor="priority" className="controls_label_priority">
        Priority:
      </label>
      <select
        defaultValue="LOW"
        className="controls_priority"
        name="priority"
        onChange={sendData}
      >
        <option value="LOW">Low</option>
        <option value="MEDIUM">Medium</option>
        <option value="HIGH">High</option>
      </select>
    </>
  );
}
