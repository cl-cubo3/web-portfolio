import { Button, Col, Container, Form, Jumbotron, Row } from "react-bootstrap";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = styled(Jumbotron)`
  background-color: #292d3e;
  color: white;
  text-align: center;
`;

const InfoBox = styled.div`
  margin-bottom: 1rem;
`;

const Info = styled.h6`
  color: #bfc7d5;
  display: inline;
`;

const Title = styled.h6`
  display: inline;
`;

const StyledCol = styled(Col)`
  background-color: #292d3e;
  color: #bfc7d5;
  border-radius: 0.3rem;
  padding-top: 15px;
`;

const CenterBox = styled.div`
  text-align: center;
`;

const TitleForm = styled.h2`
  color: white;
`;

const ErrorAlert = styled.p`
  font-weight: bold;
`;

interface FormValue {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { errors, handleSubmit, register, setValue } = useForm<FormValue>();

  const clearInputs = () => {
    setValue("name", "");
    setValue("email", "");
    setValue("subject", "");
    setValue("message", "");
  };

  const sendContact: SubmitHandler<FormValue> = (data) =>
    console.log("🚀 ~ data", data);

  return (
    <>
      <ContactInfo>
        <h5>Contact Info</h5>
        <br />
        <InfoBox>
          <Title style={{ display: "inline" }}>
            <FontAwesomeIcon icon={["fas", "map-pin"]} />
            &nbsp;Adress:
          </Title>
          <Info>&nbsp;Santiago 1320, Depto 816, Santiago</Info>
        </InfoBox>
        <InfoBox>
          <Title>
            <FontAwesomeIcon icon={["fas", "mobile-alt"]} />
            &nbsp;Phone:
          </Title>
          <Info>&nbsp;+56 9 9992 0253</Info>
        </InfoBox>
        <InfoBox>
          <Title>
            <FontAwesomeIcon icon={["fas", "inbox"]} />
            &nbsp;Email:
          </Title>
          <Info>&nbsp;claudio.lc@live.cl</Info>
        </InfoBox>
        <InfoBox>
          <a href="https://www.linkedin.com/in/claudio-leivacabello/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </a>
          &nbsp;
          <a href="https://www.instagram.com/marraqqueta/">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          &nbsp;
          <a href="https://twitter.com/marraqqueta">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </InfoBox>
      </ContactInfo>
      <Container>
        <Row className="justify-content-md-center">
          <TitleForm>Send me a message</TitleForm>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-md-center">
          <StyledCol sm="6">
            <Form onSubmit={handleSubmit(sendContact)}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  ref={register({ required: true })}
                />
                {errors.name && <ErrorAlert>Your name is required</ErrorAlert>}
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  ref={register({ required: true })}
                />
                {errors.email && (
                  <ErrorAlert>Your email is required</ErrorAlert>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  ref={register({ required: true })}
                />
                {errors.subject && <ErrorAlert>Subject is required</ErrorAlert>}
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  ref={register({ required: true })}
                />
                {errors.message && (
                  <ErrorAlert>Please include a message</ErrorAlert>
                )}
              </Form.Group>
              <Form.Group>
                <CenterBox>
                  <Button variant="secondary" type="submit">
                    Send
                  </Button>
                  <Button
                    variant="secondary"
                    className="ml-2"
                    onClick={clearInputs}
                  >
                    Clear
                  </Button>
                </CenterBox>
              </Form.Group>
            </Form>
          </StyledCol>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
