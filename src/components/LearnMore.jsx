import { Link } from "react-router-dom";

const LearnMore = ({ learnMore, icon }) => {
  return (
    <Link type="button" className="text-white">
      {learnMore} {icon}
    </Link>
  );
};

export default LearnMore;
