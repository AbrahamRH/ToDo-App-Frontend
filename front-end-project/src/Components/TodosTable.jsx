import { useEffect, useState } from "react";
import TodoRow from "./TodoRow";

export default function TodosTable({ handleAPI }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    handleAPI("GET").then((data) => {
      setTodos(data);
    });
  }, []);

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
