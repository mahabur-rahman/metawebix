import Topbar from "../components/Topbar/Topbar";
import Banner from "../components/banner";

const Home = () => {
  const userName = "momitha";
  return (
    <>
      <Topbar />
      <Banner userName={userName} />
    </>
  );
};
export default Home;
