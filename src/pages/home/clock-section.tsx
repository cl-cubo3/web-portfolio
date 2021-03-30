import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

import { StyledCard, StyledBody } from "shared/components/card";

const Clock = styled(StyledBody)`
  color: #f9e64f;
  font-size: 2rem;
`;

const ClockSection = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  const updateClock = () => {
    setTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    const intervalID = setInterval(() => updateClock(), 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <Row className="justify-content-md-center align-items-center">
      {!!time && (
        <Col md="4">
          <StyledCard className="text-center">
            <Clock>{time}</Clock>
          </StyledCard>
        </Col>
      )}
    </Row>
  );
};

export default ClockSection;
