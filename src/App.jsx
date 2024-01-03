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
import NotFound from "./components/NotFound";
import VideoCardDetails from "./components/VideoCardDetails";
import Register from "./pages/register";
import Login from "./pages/login";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shorts" element={<Shorts />} />
        <Route exact path="/subscription" element={<Subscription />} />
        <Route exact path="/series/:gokula" element={<Movies />} />
        <Route exact path="/details/:cardItem" element={<VideoCardDetails />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
