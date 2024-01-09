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
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/series/:gokula" element={<Movies />} />
        <Route path="/details/:cardItem" element={<VideoCardDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
