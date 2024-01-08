// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// global  styles
import "./global.scss";
// pages
import Home from "./pages/home";
import MyClock from "./component/MyClock";

const App = () => {
  return (
    <>
      {/* <Home /> */}
      <MyClock />
    </>
  );
};

export default App;
