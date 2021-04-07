import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContactForm from "./contact-form";

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

const Contact = () => {
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
          <Info>&nbsp;{process.env.REACT_APP_ADDRESS}</Info>
        </InfoBox>
        <InfoBox>
          <Title>
            <FontAwesomeIcon icon={["fas", "mobile-alt"]} />
            &nbsp;Phone:
          </Title>
          <Info>&nbsp;{process.env.REACT_APP_PHONE}</Info>
        </InfoBox>
        <InfoBox>
          <Title>
            <FontAwesomeIcon icon={["fas", "inbox"]} />
            &nbsp;Email:
          </Title>
          <Info>&nbsp;{process.env.REACT_APP_EMAIL}</Info>
        </InfoBox>
        <InfoBox>
          <a href={process.env.REACT_APP_LINKEDIN_ACCOUNT}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </a>
          &nbsp;
          <a href={process.env.REACT_APP_INSTAGRAM_ACCOUNT}>
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          &nbsp;
          <a href={process.env.REACT_APP_TWITTER_ACCOUNT}>
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </InfoBox>
      </ContactInfo>
      <ContactForm />
    </>
  );
};

export default Contact;
