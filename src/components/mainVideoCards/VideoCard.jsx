import { Card, Container, Row, Col } from "react-bootstrap";
import "./videoCard.scss";
import { mainVideosContent } from "../../data/data.jsx";

const VideoCard = () => {
  return (
    <>
      <section id="videoCard">
        <Container>
          <Row>
            {mainVideosContent.map((item) => {
              return (
                <>
                  <Col xl={3} key={item.id}>
                    <div className="video_card my-2">
                      <Card>
                        <Card.Img variant="top" src={item.imgSrc} />
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>{item.channelName}</Card.Text>
                          <Card.Text>{item.views}</Card.Text>
                          <Card.Text>{item.times}</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
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
