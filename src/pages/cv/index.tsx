import { Card, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import { StyledCard, StyledBody } from "shared/components/card";
import MainPic from "shared/images/foto-cv.jpeg";
import Education from "./education";
import Experience from "./work-experience";

const Title = styled.h2`
  color: white;
`;

const CV = () => {
  return (
    <>
      <Row className="align-items-center">
        <Col sm={4}>
          <StyledCard>
            <Card.Img src={MainPic} />
          </StyledCard>
        </Col>
        <Col sm={8}>
          <Container>
            <Row className="justify-content-md-center">
              <Title>About Me</Title>
            </Row>
          </Container>
          <StyledCard>
            <StyledBody>
              Computer science engineer with a background in teaching. Kept the
              social skills and the ability to work in groups. I like working on
              organized environments where I can work on my tasks and have a
              good time.
            </StyledBody>
          </StyledCard>
        </Col>
      </Row>
      <br />
      <Education />
      <br />
      <Experience />
    </>
  );
};

export default CV;
