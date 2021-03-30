import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import { StyledCard, StyledHeader, StyledBody } from "shared/components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = styled.h2`
  color: white;
`;

const Bold = styled(StyledBody)`
  font-weight: bold;
  font-size: 1.1rem;
`;

const Education = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Title>Education</Title>
        </Row>
      </Container>
      <Row>
        <Col sm={4}>
          <StyledCard className="text-center h-100">
            <StyledHeader className="pt-4">
              <FontAwesomeIcon
                className="mb-3"
                icon={["fas", "laptop-code"]}
                size="8x"
                color="#f9e64f"
              />
              <br />
              <h4>Computer Science Engineering</h4>
            </StyledHeader>
            <Bold>Universidad Tecnol&oacute;gica de Chile</Bold>
            <StyledBody>2016 - 2020</StyledBody>
          </StyledCard>
        </Col>
        <Col sm={4}>
          <StyledCard className="text-center h-100">
            <StyledHeader className="pt-4">
              <FontAwesomeIcon
                className="mb-3"
                icon={["fas", "chalkboard"]}
                size="8x"
                color="#f9e64f"
              />
              <br />
              <h4>English Teacher</h4>
            </StyledHeader>
            <Bold>
              Universidad Metropolitana de Ciencias de la Educaci&oacute;n
            </Bold>
            <StyledBody>2010 - 2015</StyledBody>
          </StyledCard>
        </Col>
        <Col sm={4}>
          <StyledCard className="text-center h-100">
            <StyledHeader className="pt-4">
              <FontAwesomeIcon
                className="mb-3"
                icon={["fas", "globe-americas"]}
                size="8x"
                color="#f9e64f"
              />
              <br />
              <h4>Education</h4>
            </StyledHeader>
            <Bold>Northwest College</Bold>
            <StyledBody>2014 (1 semester)</StyledBody>
          </StyledCard>
        </Col>
      </Row>
    </>
  );
};

export default Education;
