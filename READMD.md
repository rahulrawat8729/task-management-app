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

### **Backend Architecture**
* **MVC Pattern:** Organized into Models, Controllers, and Routes for high maintainability.
* **Mongoose Modeling:** Used for strict schema validation.
* **Centralized Error Handling:** Ensures consistent API responses and easier debugging.

### **Frontend & UX**
* **Vite:** Chosen for its lightning-fast HMR (Hot Module Replacement).
* **Tailwind CSS:** Used to achieve a modern, "utility-first" design without bulky CSS files.
* **Service Layer:** API calls are abstracted into separate service files to keep components clean.

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
To maintain transparency, here is how AI was utilized during development:
* **Where AI Helped:** Assisted with boilerplate structure, Tailwind class suggestions, and README formatting.
* **Human Logic:** I handled the core architectural decisions, API design, database schema relationships, and cross-origin integration.

---

## ✅ Assessment Checklist
- [x] Frontend (React/JS/CSS)
- [x] Backend REST API (Node/Express)
- [x] CRUD Functionality
- [x] MongoDB Integration
- [x] Clean Code & Documentation
