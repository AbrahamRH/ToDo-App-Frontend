import TodoRow from "./TodoRow";
import { useContext } from "react";
import { TodoContext } from "../Context/TodosContext";

export default function TodosTable() {
  const {todos} = useContext(TodoContext);
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Priority</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          return <TodoRow key={todo.id} todo={todo} />
        })}
      </tbody>
    </table>
  );
}
