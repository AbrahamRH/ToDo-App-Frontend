import "../Assets/App.css";
import handleAPI from "../Utils/API";
import SearchControls from "./SearchControls";
import NewTodoButton from "./NewTodoButton";
import TodosTable from "./TodosTable";

import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <SearchControls handleAPI={handleAPI} />
      <NewTodoButton handleAPI={handleAPI} />
      <TodosTable handleAPI={handleAPI} />
    </div>
  );
}

export default App;
