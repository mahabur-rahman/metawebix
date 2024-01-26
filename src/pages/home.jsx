import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import VideoCard from "../components/mainVideoCards/VideoCard";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Topbar title="YT" toggleSidebar={toggleSidebar} />

      <div className="d-flex justify-content-center">
        {showSidebar && <Sidebar />}

        <VideoCard />
      </div>
    </>
  );
};

export default Home;
