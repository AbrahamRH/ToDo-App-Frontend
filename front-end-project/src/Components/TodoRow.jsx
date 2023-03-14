import Modal from "./Modal";
import "../Assets/Styles/modal.css";

import { useContext, useState, useEffect } from "react";
import { TodoContext } from "../Context/TodosContext";

export default function TodoRow({ todo }) {
  const { setTodoDone, setTodoUndone, deleteTodo } = useContext(TodoContext);
  const [isChecked, setIsChecked] = useState(todo.done);
  const [modal, setModal] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setTodoDone(todo.id);
    } else {
      setTodoUndone(todo.id);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }


  const handleDeleteButton = () => {
    deleteTodo(todo.id);
  };

  useEffect( () => {
  }, [handleDeleteButton])

  return (
    <>
    <tr>
      <td className="checkbox">
        <input
          type="checkbox"
          name="done-checkbox"
          value={isChecked ? "done" : "undone"}
          checked={isChecked}
          onChange={handleCheck}
        />
      </td>
      <td>{todo.name}</td>
      <td>{todo.priority}</td>
      <td>{todo.dueDate}</td>
      <td className="button-data">
        <button onClick={toggleModal}>Update</button>
        <button onClick={handleDeleteButton}>Delete</button>
      </td>
    </tr>
      {modal && <Modal toggleModal={toggleModal} toCreateTodo={false} todoId={todo.id}/>}
    </>
  );
}
