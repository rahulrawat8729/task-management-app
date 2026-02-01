const Task = require("../models/Task");

// GET /tasks
const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// POST /tasks
const createTask = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;

    if (!title || !description) {
      res.status(400);
      throw new Error("Title and description are required");
    }

    const task = await Task.create({
      title,
      description,
      status,
    });

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

// PUT /tasks/:id
const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!task) {
      res.status(404);
      throw new Error("Task not found");
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

// DELETE /tasks/:id
const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      res.status(404);
      throw new Error("Task not found");
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
