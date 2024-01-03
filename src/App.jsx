// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// global  styles
import "./global.scss";
// pages
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Shorts from "./pages/shorts";
import Subscription from "./pages/subscription";
import Movies from "./pages/Movies";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shorts" element={<Shorts />} />
        <Route exact path="/subscription" element={<Subscription />} />
        <Route exact path="/:gokula" element={<Movies />} />
      </Routes>
    </>
  );
};

export default App;
