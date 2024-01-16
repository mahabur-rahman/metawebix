import { useState, useEffect } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState(null);

  // local storage get item | persist data
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedData);
  }, []);

  // local storage set item
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      if (editTask !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editTask] = newTask;

        setTasks(updatedTasks);
        setEditTask(null);
      } else {
        setTasks([...tasks, newTask]);
        setNewTask("");
      }
    }
  };

  const editTaskFunc = (index) => {
    setNewTask(tasks[index]);
    setEditTask(index);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks.splice(index, 1);

    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Simple Todo App</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add or edit a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={addTask}>
          {editTask !== null ? "Edit task" : "Add task"}
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((item, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            {item}
            <div>
              <button
                className="btn btn-warning me-2"
                onClick={() => editTaskFunc(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => removeTask(index)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
