import "bootstrap/dist/css/bootstrap.min.css";
// global css
import "./global.css";
// react router dom
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
// pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

const App = () => {
  return (
    <>
      <Topbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="*" exact element={<h3>Sorry, 404 not found</h3>} />
      </Routes>
    </>
  );
};

export default App;
