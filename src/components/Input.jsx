import { useState } from "react";
import AddTaskBtn from "./AddTaskBtn";

const Input = () => {
  const [value, setValue] = useState("");

  const btnContent = "Add Task";

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add todo.."
        className="form-control mb-3"
        onChange={handleChange}
      />

      {/* btn  */}
      <AddTaskBtn content={btnContent} />
    </form>
  );
};

export default Input;
