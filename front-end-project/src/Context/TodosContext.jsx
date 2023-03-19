import handleAPI from "../Utils/API";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const TodoContext = createContext();

export function TodosContextProvider(props) {
  const [todos, setTodos] = useState([]);
  const [todosChange, setTodoChange] = useState(false);
  const [pagesInfo, setPagesInfo] = useState({
    number: 0,
    totalPages: 0,
    first: true,
    last: false,
  });

  const [requestParams, setRequestParams] = useState({
    method: "GET",
    endpoint: "/todos",
    body: {},
    params: "",
    page: pagesInfo.number,
  });

  useEffect(() => {
    handleAPI(...Object.values(requestParams)).then((data) => {
      setTodos(data.content);
      setPagesInfo({
        number: data.number,
        totalPages: data.totalPages,
        first: data.first,
        last: data.last,
      });
    });
  }, [requestParams, todosChange]);

  function createTodo(todo) {
    setTodos(todos.push(todo));
  }

  function setTodoDone(id) {
    handleAPI("POST", "/todos/" + id + "/done");
    setTodoChange(!todosChange);
  }

  function setTodoUndone(id) {
    handleAPI("PUT", "/todos/" + id + "/undone");
    setTodoChange(!todosChange);
  }

  function deleteTodo(id) {
    handleAPI("DELETE", "/todos/" + id);
    setTodoChange(!todosChange);
  }

  function updateTodo(id, todo) {
    handleAPI("PUT", "/todos/" + id, todo);
  }

  function searchTodos(name, priority, state) {
    const params = "&name=" + name + "&priority=" + priority + "&done=" + state;
    setRequestParams((prevParams) => ({
      ...prevParams,
      params: params,
      page: 0,
    }));
    setTodoChange(!todosChange);
  }

  // Pagination controls
  function selectPage(page) {
    setRequestParams((prevParams) => ({
      ...prevParams,
      page: page,
    }));
  }

  function nextPage() {
    if (!pagesInfo.last) {
      setRequestParams((prevParams) => ({
        ...prevParams,
        page: requestParams.page + 1,
      }));
      setTodoChange(!todosChange);
    }
  }

  function prevPage() {
    if (!pagesInfo.first) {
      setRequestParams((prevParams) => ({
        ...prevParams,
        page: requestParams.page--,
      }));
      setTodoChange(!todosChange);
    }
  }

  function firstPage() {
    setRequestParams((prevParams) => ({
      ...prevParams,
      page: 0,
    }));
    setTodoChange(!todosChange);
  }

  function lastPage() {
    setRequestParams((prevParams) => ({
      ...prevParams,
      page: pagesInfo.totalPages - 1,
    }));
    setTodoChange(!todosChange);
  }

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
        pagesInfo,
        selectPage,
        nextPage,
        prevPage,
        firstPage,
        lastPage,
        todosChange,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
