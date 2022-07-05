import "./App.css";
import TaskList from "./components/TaskList";
import "./App.css";
function App() {
  return (
    <div className="task-app">
      <div className="task-main-list">
        <h1>To-Do App</h1>
        <TaskList></TaskList>
      </div>
    </div>
  );
}

export default App;
