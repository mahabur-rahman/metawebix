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
import Post from "./pages/post";
import { UserContextProvider } from "./UserContext/UserContext";

const App = () => {
  return (
    <UserContextProvider>
      <Topbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/post" exact element={<Post />} />
        <Route path="*" exact element={<h3>Sorry, 404 not found</h3>} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;
