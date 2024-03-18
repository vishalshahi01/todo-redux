import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="container mx-auto max-w-xl p-4">
      <h1 className="text-center font-bold text-4xl">Todo List</h1>
      <AddTodo />
      <div className="bg-gray-400 rounded p-4 mt-4">
        <Todos />
      </div>
    </div>
  );
}

export default App;
