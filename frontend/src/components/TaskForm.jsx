import { useState } from "react";
import api from "../services/api";

const TaskForm = ({ onTaskCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/tasks", formData);
      setFormData({ title: "", description: "", status: "Pending" });
      onTaskCreated();
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create task");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Add Task</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Task Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
