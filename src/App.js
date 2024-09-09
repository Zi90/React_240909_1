import './App.css';
import TodoList from './component/TodoList';
import './component/createTodo.css';

function App() {
  return (
    <div className="App">
      <div className='title'>TodoList</div>
      <TodoList />
    </div>
  );
}

export default App;
