import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Forgot from "./components/Forgot";
import Reset from "./components/Reset";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot-password" element={<Forgot />} />
        <Route exact path="/reset/:token" element={<Reset />} />
      </Routes>
    </>
  );
};

export default App;
