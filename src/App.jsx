import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
