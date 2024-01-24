import "./global.css";
import Blog from "./pages/Blog";
import Chat from "./pages/Chat";
import FeaturesBusiness from "./pages/FeaturesBusiness";
import HelpCenter from "./pages/HelpCenter";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesBusiness />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
