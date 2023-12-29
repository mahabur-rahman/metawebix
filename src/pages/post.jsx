import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostContent from "../components/PostContent";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch data from API : {posts.length} </h1>
      <Container fluid>
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
