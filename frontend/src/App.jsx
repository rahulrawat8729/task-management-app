import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [refresh, setRefresh] = useState(0);

  const reloadTasks = () => {
    setRefresh((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Task Management App
        </h1>

        <TaskForm onTaskCreated={reloadTasks} />
        <TaskList refresh={refresh} />
      </div>
    </div>
  );
}

export default App;
