import handleAPI from "../Utils/API";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const TodoContext = createContext();

export function TodosContextProvider(props) {
  const [todos, setTodos] = useState([]);
  const [todosChange, setTodoChange] = useState(false);
  const [requestParams, setRequestParams] = useState({
    method: "GET",
    endpoint: "/todos",
    body: {},
    params: "",
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
    setTodoChange(!todosChange);
  }

  function updateTodo(id, todo) {
    handleAPI("PUT", "/todos/" + id, todo);
  }

  function searchTodos(name, priority, state) {
    const params =
      "name=" + name + "&priority=" + priority + "&done=" + state;
    setRequestParams((prevParams) => ({
      ...prevParams,
      params: params,
    }));
    setTodoChange(!todosChange);
  }

  useEffect(() => {
    handleAPI(...Object.values(requestParams)).then((data) => {
      setTodos(data);
    });
  }, [todosChange]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        createTodo,
        setTodoDone,
        setTodoUndone,
        deleteTodo,
        updateTodo,
        searchTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
