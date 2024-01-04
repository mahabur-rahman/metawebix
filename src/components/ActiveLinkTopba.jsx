import { Link } from "react-router-dom";

const ActiveLinkTopba = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/shorts" className="mx-5">
        Shorts
      </Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default ActiveLinkTopba;
