import { useEffect, useState } from "react";
import api from "../services/api";

const TaskList = ({ refresh }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      alert("Failed to fetch tasks");
    }
  };

  const updateStatus = async (id, currentStatus) => {
    const nextStatus =
      currentStatus === "Pending"
        ? "In Progress"
        : currentStatus === "In Progress"
        ? "Completed"
        : "Pending";

    try {
      await api.put(`/tasks/${id}`, { status: nextStatus });
      fetchTasks();
    } catch (error) {
      alert("Failed to update task");
    }
  };

  const deleteTask = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      alert("Failed to delete task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Task List</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks found</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Title</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td className="border p-2">{task.title}</td>
                <td className="border p-2">{task.description}</td>
                <td className="border p-2 font-medium">
                  {task.status}
                </td>
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() =>
                      updateStatus(task._id, task.status)
                    }
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    Update
                  </button>

                  <button
                    onClick={() => deleteTask(task._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
