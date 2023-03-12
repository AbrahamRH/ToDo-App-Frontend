import '../Assets/App.css';
import SearchControls from './SearchControls'
import NewTodoButton from './NewTodoButton';
import handleAPI from '../Utils/API';

function App() {
  return (
    <div className="App">
      <SearchControls handleAPI={handleAPI}/>
      <NewTodoButton handleAPI={handleAPI}/>
    </div>
  );
}

export default App;
