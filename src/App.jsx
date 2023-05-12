import "./App.css";
import LoginScreen from "./log/Form";
import { Route, Routes } from "react-router-dom";
import Task from "./log/Task";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
