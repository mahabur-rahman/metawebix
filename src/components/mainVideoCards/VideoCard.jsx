import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./videoCard.scss";
import List from "../List.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import axios from "axios";
import DynamicCard from "../DynamicCard.jsx";

const VideoCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      offset: 200,
    });

    // Initialize FancyBox
    Fancybox.bind("[data-fancybox]", {});
  }, []);

  useEffect(() => {
    const fetChData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    };

    fetChData();
  }, []);

  return (
    <section id="videoCard">
      <Container>
        <List />
        <Row>
          {users.map((anything) => (
            <Col xl={3} key={anything.id}>
              <DynamicCard {...anything} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default VideoCard;
