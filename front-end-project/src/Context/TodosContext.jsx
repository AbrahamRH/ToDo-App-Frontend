import handleAPI from "../Utils/API";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const TodoContext = createContext();

export function TodosContextProvider(props) {
  const [todos, setTodos] = useState([]);

  function createTodo(todo) {
    setTodos(todos.push(todo));
  }

  function setTodoDone(id) {
    handleAPI("POST", "/todos/" + id + "/done");
  }

  function setTodoUndone(id) {
    handleAPI("PUT", "/todos/" + id + "/undone");
  }

  useEffect(() => {
    handleAPI("GET").then((data) => {
      setTodos(data);
    });
  }, []);

  return (
    <TodoContext.Provider
      value={{ todos, createTodo, setTodoDone, setTodoUndone }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
