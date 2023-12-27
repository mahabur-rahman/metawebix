import Title from "./Title";
import PropTypes from "prop-types";

const Banner = ({ userName }) => {
  const heading = "Better Solutions For Your Business With NIFTY IT SOLUTION.";

  const para = "Better Solutions For Your Business With NIFTY IT SOLUTION.";

  return (
    <>
      <Title heading={heading} para={para} userName={userName} />
    </>
  );
};

Banner.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Banner;
