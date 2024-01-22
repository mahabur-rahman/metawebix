import logo from "../images/google.jpeg";
import { Bs0Circle } from "react-icons/bs";
import MainContent from "./MainContent";

const Gmeet = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} className="h-12 w-12 rounded-full" />
          <span className="text-purple-500 text-sm font-semibold">
            Google meet
          </span>
        </div>
        <div className="text-xs flex items-center">
          <span className="text-xs">12:34pm.Friday.jan 19</span>
          <span>
            <Bs0Circle className="text-red-500" />
          </span>
          <span>
            <Bs0Circle className="text-black-500 px-1" />
          </span>
          <span>
            <Bs0Circle className="text-orange-500" />
          </span>
        </div>
      </div>

      <MainContent />
    </>
  );
};

export default Gmeet;
