// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// global  styles
import "./global.scss";
// pages
import Home from "./pages/home";
import Sidebar from "./components/Sidebar/Sidebar";
import VideoCard from "./components/mainVideoCards/VideoCard";

const App = () => {
  return (
    <>
      <Home />
      <div className="d-flex">
        <Sidebar />
        <VideoCard />
      </div>
    </>
  );
};

export default App;
