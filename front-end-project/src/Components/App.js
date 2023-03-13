import "../Assets/App.css";
import SearchControls from "./SearchControls";
import NewTodoButton from "./NewTodoButton";
import TodosTable from "./TodosTable";

function App() {
  return (
    <div className="App">
      <SearchControls />
      <NewTodoButton />
      <TodosTable />
    </div>
  );
}

export default App;
