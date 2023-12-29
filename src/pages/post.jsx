import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostContent from "../components/PostContent";
import axios from "axios";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center my-5 text-danger">
        Fetch data from API : {posts.length}
      </h1>
      <Container>
        <Row>
          {posts.slice(0, 10).map((post) => (
            <Col md={6} key={post.id}>
              <PostContent post={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Post;
