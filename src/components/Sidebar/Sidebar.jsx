import {
  FaHome,
  FaBlackberry,
  FaCheckDouble,
  FaAngleRight,
} from "react-icons/fa";
import "./sidebar.scss";
import { sidebarFistContent } from "../../data/data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [data, setData] = useState(sidebarFistContent);
  const user = true;

  return (
    <>
      <section id="sidebar">
        {data.map((text) => (
          <>
            <div className="sidebar_menu my-3 mx-3" key={text.id}>
              <span>{text.icon}</span>
              <Link to={text.url} className="text-black">
                <span className="mx-3">{text.text}</span>
              </Link>
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

        {/* dynamic element show when user login */}
        {/* {user ? (
          <div className="mx-3 fw-bold mt-5">Mahabur</div>
        ) : (
          <>
            <Link to="/register">
              <div className="mx-3 fw-bold">Register</div>
            </Link>

            <Link to="/login">
              <div className="mx-3 fw-bold">Login</div>
            </Link>
          </>
        )} */}
      </section>
    </>
  );
};

export default Sidebar;
