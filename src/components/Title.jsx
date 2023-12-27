import PropTypes from "prop-types";

const Title = ({ heading, para, userName }) => {
  return (
    <>
      <h2>{heading}</h2>
      <p>{para}</p>
      <p>{userName}</p>
    </>
  );
};

Title.propTypes = {
  heading: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Title;
