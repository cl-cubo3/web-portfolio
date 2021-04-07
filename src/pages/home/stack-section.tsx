import { Accordion, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledBody, StyledCard, StyledHeader } from "shared/components/card";

const StackSection = () => {
  return (
    <Row className="justify-content-md-center align-items-center">
      <Col md="6">
        <Accordion>
          <StyledCard className="text-center">
            <Accordion.Toggle as={StyledHeader} eventKey="0">
              This website was built using{" "}
              <FontAwesomeIcon icon={["fas", "arrow-right"]} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <>
                <StyledBody>
                  <a href="https://create-react-app.dev/docs/getting-started">
                    create-react-app (using a typescript template)
                  </a>
                </StyledBody>
                <StyledBody>
                  <a href="https://react-bootstrap.github.io/getting-started/introduction/">
                    react-bootstrap
                  </a>
                </StyledBody>
                <StyledBody>
                  <a href="https://styled-components.com/">styled-components</a>
                </StyledBody>
                <StyledBody>
                  <a href="https://fontawesome.com/how-to-use/on-the-web/using-with/react">
                    FontAwesome
                  </a>
                </StyledBody>
                <StyledBody>
                  <a href="https://github.com/axios/axios">axios</a>
                </StyledBody>
                <StyledBody>
                  <a href="https://react-hook-form.com/">react-hook-form</a>
                </StyledBody>
                <StyledBody>
                  <a href="https://reactrouter.com/web/guides/quick-start">
                    react-router-dom
                  </a>
                </StyledBody>
                <StyledBody>
                  <a href="https://www.npmjs.com/package/react-router-bootstrap">
                    react-router-bootstrap
                  </a>
                </StyledBody>
              </>
            </Accordion.Collapse>
          </StyledCard>
        </Accordion>
      </Col>
    </Row>
  );
};

export default StackSection;
