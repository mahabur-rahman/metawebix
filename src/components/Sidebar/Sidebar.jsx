import {
  FaHome,
  FaBlackberry,
  FaCheckDouble,
  FaAngleRight,
} from "react-icons/fa";
import "./sidebar.scss";
import { sidebarFistContent } from "../../data/data";
import { useState } from "react";

const Sidebar = () => {
  const [data, setData] = useState(sidebarFistContent);

  return (
    <>
      <section id="sidebar">
        {data.map((text) => (
          <>
            <div className="sidebar_menu my-3 mx-3" key={text.id}>
              <span>{text.icon}</span>
              <span className="mx-3">{text.text}</span>
            </div>
          </>
        ))}

        {/* if user login */}
        <div className="sidebar_menu my-3">
          <span className="mx-3">You</span>
          <span>
            <FaAngleRight />
          </span>
        </div>

        <div className="sidebar_menu my-3 mx-3">
          <span>
            <FaHome />
          </span>
          <span className="mx-3">Your Channel</span>
        </div>

        <div className="sidebar_menu my-3 mx-3">
          <span>
            <FaBlackberry />
          </span>
          <span className="mx-3">History</span>
        </div>

        <div className="sidebar_menu mx-3">
          <span>
            <FaCheckDouble />
          </span>
          <span className="mx-3">Your videos</span>
        </div>

        <div className="sidebar_menu my-3 mx-3">
          <span>
            <FaCheckDouble />
          </span>
          <span className="mx-3">Watch later </span>
        </div>

        <div className="sidebar_menu my-3 mx-3">
          <span>
            <FaCheckDouble />
          </span>
          <span className="mx-3">Download</span>
        </div>

        <div className="sidebar_menu my-3 mx-3">
          <span>
            <FaCheckDouble />
          </span>
          <span className="mx-3">Liked videos</span>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
