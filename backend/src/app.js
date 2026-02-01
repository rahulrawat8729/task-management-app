const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Global middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use("/tasks", taskRoutes);

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Task Management API is running",
  });
});

// Error handler (must be last)
app.use(errorHandler);

module.exports = app;
