import { useState } from "react";
import Input from "../components/Input";
import MainTask from "../components/MainTask";
import Title from "../components/Title";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const title = "Todo List in React";

  return (
    <div
      className="p-5 mt-5"
      style={{ width: "50%", background: "#ddd", margin: "0 auto" }}
    >
      {/* title  */}
      <Title title={title} />

      {/* input area */}
      <Input />

      {/* main task  */}

      <MainTask />
    </div>
  );
};

export default Home;
