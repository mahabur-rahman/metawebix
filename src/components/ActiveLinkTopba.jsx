import { NavLink } from "react-router-dom";

const ActiveLinkTopba = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shorts" className="mx-5">
        Shorts
      </NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default ActiveLinkTopba;
