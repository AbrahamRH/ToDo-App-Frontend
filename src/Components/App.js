import "../Assets/App.css";
import SearchControls from "./SearchControls";
import NewTodoButton from "./NewTodoButton";
import TodosTable from "./TodosTable";
import PaginationControl from "./PaginationControl";
import Metrics from "./Metrics";

function App() {
  return (
    <div className="App">
      <SearchControls />
      <NewTodoButton />
      <TodosTable />
      <PaginationControl />
      <Metrics />
    </div>
  );
}

export default App;
