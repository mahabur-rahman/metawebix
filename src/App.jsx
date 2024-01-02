// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// global  styles
import "./global.scss";
// pages
import Home from "./pages/home";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Home />
      <div className="d-flex">
        <Sidebar />
        <h1 className="bg-primary p-5">content</h1>
      </div>
    </>
  );
};

export default App;
