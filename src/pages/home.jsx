import MyChart from "../components/MyChart";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import VideoCard from "../components/mainVideoCards/VideoCard";

const Home = () => {
  return (
    <>
      {/* <Topbar title="YouTube" />
      <div className="d-flex">
        <Sidebar />
        <VideoCard />
      </div> */}

      <MyChart />
    </>
  );
};

export default Home;
