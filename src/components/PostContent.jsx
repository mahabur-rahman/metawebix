import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostContent = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button variant="warning" onClick={handleClick}>
            Read More
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostContent;
