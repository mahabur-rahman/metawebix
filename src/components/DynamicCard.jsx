import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DynamicCard = ({ id, username, email, phone, website, address }) => {
  return (
    <>
      <Link to={`/user/${id}`} className="video_card my-2">
        <Card data-aos="flip-left">
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title className="fw-bold card_title">
                Username: {username}
              </Card.Title>
            </div>
            <Card.Text className="fw-bold mx-4 px-3">Email: {email}</Card.Text>
            <Card.Text>Phone: {phone} </Card.Text>
            <Card.Text className="mx-3">Website: {website}</Card.Text>
            <Card.Text className="mx-3">City : {address.city}</Card.Text>
            <Card.Text className="mx-3">Zipcode : {address.zipcode}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};
``;

DynamicCard.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};

export default DynamicCard;
