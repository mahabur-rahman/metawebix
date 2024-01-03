import { useEffect } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import "./videoCard.scss";
import { mainVideosContent } from "../../data/data.jsx";
import List from "../List.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const VideoCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      offset: 200,
    });
  }, []);

  return (
    <>
      <section id="videoCard">
        <Container>
          <List />
          <Row>
            {mainVideosContent.map((item) => {
              return (
                <>
                  <Col xl={3} key={item.id}>
                    <Link to={`/details/${item.id}`}>
                      <div className="video_card my-2">
                        <Card data-aos="flip-left">
                          <Card.Img
                            className="main_img"
                            variant="top"
                            src={item.imgSrc}
                          />
                          <Card.Body>
                            <div className="d-flex justify-content-between">
                              <Image
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                }}
                                src={item.profilePicture}
                              />
                              <Card.Title className="fw-bold card_title">
                                {item.title}
                              </Card.Title>
                            </div>
                            <Card.Text className="fw-bold mx-4 px-3">
                              {item.channelName}
                            </Card.Text>
                            <div className="d-flex items-center mx-4 px-3">
                              <Card.Text>{item.views} views </Card.Text>
                              <Card.Text className="mx-3">
                                {item.times}
                              </Card.Text>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </Link>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default VideoCard;
