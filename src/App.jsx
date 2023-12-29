import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<h3>Sorry, 404 not found</h3>} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;
