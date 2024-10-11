import React, { useState } from "react";

// The main CRUD component
const CrudOperations = () => {
  const [tasks, setTasks] = useState([]); // Store tasks
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false); // To check if we're editing
  const [currentTaskId, setCurrentTaskId] = useState(null); // Track which task is being edited

  // Handle task creation
  const handleCreateTask = () => {
    const newTask = {
      id: Date.now(), // Use timestamp as unique id
      title: taskTitle,
      description: taskDescription,
    };
    setTasks([...tasks, newTask]); // Add new task to the list
    setTaskTitle(""); // Clear input field
    setTaskDescription(""); // Clear input field
  };

  // Handle task deletion
  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks); // Update the state after deletion
  };

  // Handle task edit initialization
  const handleEditTask = (task) => {
    setIsEditing(true);
    setCurrentTaskId(task.id);
    setTaskTitle(task.title);
    setTaskDescription(task.description);
  };

  // Handle task update
  const handleUpdateTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === currentTaskId
        ? { ...task, title: taskTitle, description: taskDescription }
        : task
    );
    setTasks(updatedTasks);
    setIsEditing(false);
    setTaskTitle("");
    setTaskDescription("");
    setCurrentTaskId(null); // Reset after update
  };

  return (
    <div className="p-10 max-w-7xl mx-auto">
      {/* Simulation Information */}
      <div className="mb-6 bg-yellow-100 p-4 rounded-md w-full">
        <p className="text-yellow-700">
          <strong>Note:</strong> This is a simulation of basic CRUD operations.
          No actual data is stored, and all tasks will be reset once you close
          the window.
        </p>
      </div>

      <div className="w-full bg-white shadow-md p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-6">
          {isEditing ? "Edit Task" : "Add Task"}
        </h1>

        <input
          type="text"
          placeholder="Task Title"
          className="p-3 border rounded-md w-full mb-4"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          className="p-3 border rounded-md w-full mb-4"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>

        <button
          onClick={isEditing ? handleUpdateTask : handleCreateTask}
          className={`${
            taskTitle && taskDescription ? "bg-blue-500" : "bg-gray-400"
          } text-white px-6 py-2 rounded-md`}
          disabled={!taskTitle || !taskDescription}
        >
          {isEditing ? "Update Task" : "Create Task"}
        </button>
      </div>

      {/* Task List */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <li
                key={task.id}
                className="bg-gray-100 p-4 mb-4 rounded-md shadow-md flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-bold">{task.title}</h3>
                  <p>{task.description}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleEditTask(task)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks found. Start by adding a task!</p>
        )}
      </div>
    </div>
  );
};

export default CrudOperations;
