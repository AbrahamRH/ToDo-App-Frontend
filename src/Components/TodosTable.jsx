import "../Assets/Styles/table.css";
import TodoRow from "./TodoRow";
import SortButton from "./SortButton";
import { useContext } from "react";
import { TodoContext } from "../Context/TodosContext";

export default function TodosTable() {
  const { todos } = useContext(TodoContext);

  return (
    <table className="todo-table">
      <thead className="table-head">
        <tr>
          <th className="check"></th>
          <th className="table-name">Name</th>
          <th className="table-priority">
            Priority
            <SortButton field={"priority"}/>
          </th>
          <th className="table-due-date">
            Due Date
            <SortButton field={"dueDate"}/>
          </th>
          <th className="table-actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        {(todos.length > 0 &&
          todos.map((todo) => {
            return <TodoRow key={todo.id} todo={todo} />;
          })) || (
          <tr>
            <td colSpan={5} className="no-content">
              No tasks yet
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
