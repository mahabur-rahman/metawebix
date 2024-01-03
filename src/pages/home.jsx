import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import VideoCard from "../components/mainVideoCards/VideoCard";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="d-flex">
        <Sidebar />
        <VideoCard />
      </div>
    </>
  );
};

export default Home;
