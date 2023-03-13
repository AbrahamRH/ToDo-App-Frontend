import handleAPI from "../Utils/API";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const TodoContext = createContext();

export function TodosContextProvider(props) {
  const [todos, setTodos] = useState([]);

  function createTodo(todo){
    setTodos(todos.push(todo))
  }

  useEffect(() => {
    handleAPI("GET").then((data) => {
      setTodos(data);
    });
  }, [handleAPI]);

  return (
    <TodoContext.Provider value={{todos, createTodo}}>{props.children}</TodoContext.Provider>
  );
}
