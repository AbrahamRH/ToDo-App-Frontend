import handleAPI from "../Utils/API";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const TodoContext = createContext();

export function TodosContextProvider(props) {
  const [todos, setTodos] = useState([]);
  const [todoDeleted, setTodoDeleted] = useState(false);
  const [requestParams, setRequestParams] = useState({
    method: "GET",
    endpoint: "/todos",
    body: {},
    params: ""
  });

  function createTodo(todo) {
    setTodos(todos.push(todo));
  }

  function setTodoDone(id) {
    handleAPI("POST", "/todos/" + id + "/done");
  }

  function setTodoUndone(id) {
    handleAPI("PUT", "/todos/" + id + "/undone");
  }

  function deleteTodo(id) {
    handleAPI("DELETE", "/todos/" + id);
    setTodoDeleted(!todoDeleted);
  }

  function updateTodo(id, todo) {
    handleAPI("PUT", "/todos/" + id, todo);
  }

  useEffect(() => {
    handleAPI(...Object.values(requestParams)).then((data) => {
      setTodos(data);
    });
  }, [todoDeleted]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        createTodo,
        setTodoDone,
        setTodoUndone,
        deleteTodo,
        updateTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
