import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledCard, StyledHeader, StyledBody } from "shared/components/card";

const Title = styled.h2`
  color: white;
`;

const Bold = styled(StyledBody)`
  font-weight: bold;
  font-size: 1.1rem;
`;

const Justified = styled(StyledBody)`
  text-align: justify;
`;

const Experience = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Title>Work Experience</Title>
        </Row>
      </Container>
      <Row>
        <Col sm={4}>
          <StyledCard className="text-center">
            <StyledHeader className="pt-4">
              <FontAwesomeIcon
                className="mb-3"
                icon={["fab", "react"]}
                size="6x"
                color="#f9e64f"
              />
              <FontAwesomeIcon
                className="mb-3 ml-3"
                icon={["fab", "node"]}
                size="6x"
                color="#f9e64f"
              />
              <br />
              <h4>NodeJS Developer, Jr</h4>
            </StyledHeader>
            <Bold>Giant Monkey Robot</Bold>
            <StyledBody>Oct 2020 - Present</StyledBody>
            <Justified>
              UI Development using NodeJS and React consuming PlayFab API
              services and Azure Functions for player's data administration
              according to the game project's needs.
            </Justified>
          </StyledCard>
        </Col>
        <Col sm={4}>
          <StyledCard className="text-center">
            <StyledHeader className="pt-4">
              <FontAwesomeIcon
                className="mb-3"
                icon={["fab", "php"]}
                size="6x"
                color="#f9e64f"
              />
              <FontAwesomeIcon
                className="mb-3 ml-3"
                icon={["fab", "html5"]}
                size="6x"
                color="#f9e64f"
              />
              <br />
              <h4>Web Developer</h4>
            </StyledHeader>
            <Bold>Cubo3 Ltda.</Bold>
            <StyledBody>Mar 2019 - Sep 2020</StyledBody>
            <Justified>
              Back-end development using PHP, through FTP connections and GitHub
              repositories for version consistency. Websites range from
              non-transactional e-commerce to e- commerce and informational
              websites. Development of web applications according to client's
              scope and requirements using the same tools mentioned above.
              Front-end development using Bootstrap, Grid and Flexbox according
              to client's requirements. Relational database design using MySQL
              according to the needs of client's companies. Gathering of
              client's requirements through small interviews in order to
              undertand the companies needs. QA Testing of websites before
              costumer approval using test plans. IT support, such as mail
              creation and management, and small server configurations through
              CPanel.
            </Justified>
          </StyledCard>
        </Col>
        <Col sm={4}>
          <StyledCard className="text-center">
            <StyledHeader className="pt-4">
              <FontAwesomeIcon
                className="mb-3"
                icon={["fas", "chalkboard-teacher"]}
                size="6x"
                color="#f9e64f"
              />
              <br />
              <h4>English Teaching</h4>
            </StyledHeader>
            <Bold>Saint Mary Joseph School</Bold>
            <StyledBody>Apr 2015 - Nov 2015</StyledBody>
            <Justified>
              TEFL (Teacher of English as a Foreign Language) from 1st grade to
              10th grade. Teaching of phonetics for 1st and 2nd graders through
              the use of Floppy Phonics. In general, teaching of English in
              accordance to school's own standards, based on Cambridge
              University's standards.
            </Justified>
          </StyledCard>
        </Col>
      </Row>
    </>
  );
};

export default Experience;
