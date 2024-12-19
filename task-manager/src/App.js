import logo from "./logo.svg";
import "./App.css";
import TaskInfo from "./components/TaskInfo";
import Demo from "./components/Demo";
function App() {
  return (
    <div className="App">
      <TaskInfo>
        <title>TaskManager</title>
      </TaskInfo>
      <Demo />
    </div>
  );
}

export default App;
