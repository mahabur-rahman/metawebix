import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const FetchData = () => {
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
        // console.log(error.name);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch data from API : {posts.length} </h1>
      {posts.slice(0, 10).map((post) => (
        <Container key={post.id}>
          <Row>
            <Col md={4}>
              <h1>{post.id}</h1>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default FetchData;

// 576-767px -> sm
// 768-992px -> md
// 992-1199px -> lg
// 1200-1399px -> xl
// 1400-up to any -> xxl
