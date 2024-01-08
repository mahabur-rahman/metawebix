import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel fade={true}>
      <Carousel.Item>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcABtP9BQDd_aB56XWm81yI6aYr7ryqTvuAw&usqp=CAU" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEM00jgsDFkwyw-9I-1Qx114vOgkNSyIWTg&usqp=CAU" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVyoBTjhk262vDLjkYAIIUrgeSlomX2npJNQ&usqp=CAU" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
