import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodosContext";

export default function TodoRow({ todo }) {
  const { setTodoDone, setTodoUndone } = useContext(TodoContext);
  const [isChecked, setIsChecked] = useState(todo.done);

  const handleCheck = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      setTodoDone(todo.id);
    } else {
      setTodoUndone(todo.id);
    }
  };

  return (
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
        <button>Update</button> <button>Delete</button>
      </td>
    </tr>
  );
}
