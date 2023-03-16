import "../Assets/App.css";
import SearchControls from "./SearchControls";
import NewTodoButton from "./NewTodoButton";
import TodosTable from "./TodosTable";
import PaginationControl from "./PaginationControl";

function App() {
  return (
    <div className="App">
      <SearchControls />
      <NewTodoButton />
      <TodosTable />
      <PaginationControl/>
    </div>
  );
}

export default App;
