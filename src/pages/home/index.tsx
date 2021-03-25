import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

import Slider from "./slider";
import CatSection from "./cat-section";
import StackSection from "./stack-section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainIcon = styled.div`
  text-align: center;
  margin: 10px;
  color: #61dafb;
`;

const Home = () => {
  return (
    <>
      <Slider />
      <br />
      <CatSection />
      <br />
      <Row className="justify-content-md-center align-items-center">
        <Col md="4">
          <MainIcon>
            <FontAwesomeIcon
              className="mb-2"
              icon={["fas", "laptop-code"]}
              size="10x"
              color="#61dafb"
            />
            <h1>I build websites!</h1>
          </MainIcon>
        </Col>
      </Row>
      <br />
      <StackSection />
    </>
  );
};

export default Home;
