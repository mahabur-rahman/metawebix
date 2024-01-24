import { Link } from "react-router-dom";

const LearnMore = ({ learnMore, icon, url }) => {
  return (
    <Link to={url} type="button" className="text-white">
      {learnMore} {icon}
    </Link>
  );
};

export default LearnMore;
