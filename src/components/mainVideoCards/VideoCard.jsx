import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./videoCard.scss";
import List from "../List.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import axios from "axios";
import DynamicCard from "../DynamicCard.jsx";
import { mainVideosContent } from "../../data/data.jsx";

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
          {mainVideosContent.map((anything) => (
            <Col xl={3} key={anything.id}>
              {/* <DynamicCard {...anything} /> */}
              <Card data-aos="flip-left">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title className="fw-bold card_title">
                      Username: mahabur
                    </Card.Title>
                  </div>
                  <Card.Text className="fw-bold mx-4 px-3">
                    Email: annur4395@gmail.com
                  </Card.Text>
                  <Card.Text>Phone: 897898 </Card.Text>
                  <Card.Text className="mx-3">Website: sdfdsd.com</Card.Text>
                  <Card.Text className="mx-3">City : dhaka</Card.Text>
                  <Card.Text className="mx-3">Zipcode : 1207</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default VideoCard;
