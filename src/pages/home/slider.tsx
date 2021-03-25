import { Carousel, Col, Image, Row } from "react-bootstrap";
import styled from "styled-components";

import slide1 from "shared/images/slider1.jpg";
import slide2 from "shared/images/slider2.jpg";
import slide3 from "shared/images/slider3.jpg";

const ColoredCaption = styled(Carousel.Caption)`
  background-color: rgba(0, 0, 0, 0.4);
`;

const Slider = () => {
  return (
    <Row>
      <Col>
        <Carousel>
          <Carousel.Item>
            <Image src={slide1} fluid />
            <ColoredCaption>
              <h3>Web Development!</h3>
              <p>I can build your website using modern tools!</p>
            </ColoredCaption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={slide2} fluid />
            <ColoredCaption>
              <h3>Web Design!</h3>
              <p>I can help you design your website and make it responsive!</p>
            </ColoredCaption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={slide3} fluid />
            <ColoredCaption>
              <h3>Cats!</h3>
              <p>Get your random cat picture and cat fact!</p>
            </ColoredCaption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};

export default Slider;
