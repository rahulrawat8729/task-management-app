# 📝 Task Management Web Application

A professional, full-stack **Task Management Application** built using the **MERN stack**. This project was developed as a part of a **Full Stack Development Internship Skill Assessment**, focusing on CRUD functionality and clean system design.

---

## 🎯 Objective
The primary goal of this project is to demonstrate proficiency in:
* **Frontend Development:** Building responsive interfaces with React.
* **Backend Design:** Creating scalable REST APIs with Node.js & Express.
* **Database Management:** Handling persistent data with MongoDB.
* **Problem Solving:** Implementing clean, maintainable code structures.

---

## 🚀 Features
* **Full CRUD:** Create, View, Update, and Delete tasks seamlessly.
* **Live Status Updates:** Toggle task completion status instantly.
* **Responsive UI:** Optimized for both desktop and mobile viewing.
* **Persistent Storage:** Data remains intact even after server restarts.
* **Custom Logging:** Backend middleware for tracking API requests.

---

## 🧰 Tech Stack

| Component | Technology Used |
| :--- | :--- |
| **Frontend** | React (Vite), Tailwind CSS, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Local Instance) |
| **Tools** | Postman, Git, VS Code |

---

## ⚙️ Setup & Installation

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd task-management-app
```

### 2. Backend Configuration
1.  Navigate to the backend folder:
    ```bash
    cd backend
    npm install
    ```
2.  Create a `.env` file in the `backend` directory:
    ```env
    PORT=5000
    MONGO_URI=mongodb://127.0.0.1:27017/taskManagerDB
    ```
3.  Start the server:
    ```bash
    npm run dev
    ```
    *The backend will run on `http://localhost:5000`*

### 3. Frontend Configuration
1.  Open a new terminal and navigate to the frontend folder:
    ```bash
    cd frontend
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
    *The frontend will run on `http://localhost:5173`*

> [!IMPORTANT]
> Ensure your **MongoDB local service** is running before starting the backend server.

---

## 🧠 Design Decisions
* **MVC Pattern:** Organized into Models, Controllers, and Routes for high maintainability.
* **Mongoose Modeling:** Used for strict schema validation.
* **Centralized Error Handling:** Ensures consistent API responses and easier debugging.
* **Vite & Tailwind:** Chosen for performance and rapid, clean UI development.

---

## 📄 Assumptions & Trade-offs

### **Assumptions**
* **Single User:** The application is designed for a single user; authentication was not part of the assignment requirements.
* **Specific Fields:** Each task includes only the fields specified in the brief: title, description, and status.
* **Workflow:** Status values are limited to `Pending`, `In Progress`, and `Completed` to keep the workflow simple.
* **Local Setup:** Assumes a local MongoDB development environment for easy evaluation.
* **Purpose:** Intended for demonstration and assessment purposes rather than production use.

### **Trade-offs**
* **No Auth:** Focused on core CRUD functionality and architecture rather than implementing login/signup.
* **Minimalist UI:** Prioritized clarity and usability over advanced styling or animations.
* **Basic Validation:** Implemented core backend validation; robust libraries like Joi or Zod were omitted to reduce complexity for this scope.
* **Deployment:** Configured for local use; cloud deployment or containerization was considered outside the project scope.
* **No Pagination:** Advanced filtering and pagination were omitted due to the small expected dataset for this assignment.

---

## 🔧 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/tasks` | Retrieve all tasks |
| `POST` | `/tasks` | Create a new task |
| `PUT` | `/tasks/:id` | Update a task's status or content |
| `DELETE` | `/tasks/:id` | Remove a task from the database |

---

## 🤖 AI Reflection
* **Where AI Helped:** Assisted with boilerplate structure, Tailwind class suggestions, and README formatting.
* **Human Logic:** Handled architectural decisions, API design, database schema relationships, and integration logic.

---

## ✅ Assessment Checklist
- [x] Frontend (React/JS/CSS)
- [x] Backend REST API (Node/Express)
- [x] CRUD Functionality
- [x] MongoDB Integration
- [x] Clean Code & Documentation
