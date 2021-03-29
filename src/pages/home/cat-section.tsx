import { Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

import { StyledCard, StyledBody } from "shared/components/card";

interface CatPicture {
  loading: boolean;
  url: string;
}

interface CatFact {
  loading: boolean;
  fact: string;
}

const CatSection = () => {
  const [catPicture, setCatPicture] = useState<CatPicture>({
    loading: false,
    url: "",
  });
  const [catFact, setCatFact] = useState<CatFact>({ loading: false, fact: "" });

  const params = {
    headers: { "x-api-key": process.env.REACT_APP_CATS_API_KEY },
  };

  const getCatPicture = async () => {
    setCatPicture({ loading: true, url: "" });
    const catPictureAPIUrl =
      "https://api.thecatapi.com/v1/images/search?limit=1";
    const response = await axios.get<[{ url: string }]>(
      catPictureAPIUrl,
      params
    );
    setCatPicture({ loading: false, url: response.data[0].url });
  };

  const getCatFact = async () => {
    setCatFact({ loading: true, fact: "" });
    const catFactAPIUrl = "https://cat-fact.herokuapp.com/facts";
    const response = await axios.get<[{ text: string }]>(catFactAPIUrl);
    setCatFact({
      loading: false,
      fact: response.data[Math.floor(Math.random() * 5)].text,
    });
  };

  return (
    <Row className="justify-content-md-center align-items-center">
      <Col md="4">
        <StyledCard className="text-center">
          {!!catPicture.url && <Card.Img src={catPicture.url} />}
          <StyledBody>
            <Button variant="dark" onClick={getCatPicture}>
              {catPicture.loading ? "Loading..." : "Random Cat!"}
            </Button>
          </StyledBody>
        </StyledCard>
      </Col>
      <Col md="4">
        <StyledCard className="text-center">
          {!!catFact.fact && <StyledBody>{catFact.fact}</StyledBody>}
          <StyledBody>
            <Button variant="dark" onClick={getCatFact}>
              {catFact.loading ? "Loading..." : "Random Cat Fact!"}
            </Button>
          </StyledBody>
        </StyledCard>
      </Col>
    </Row>
  );
};

export default CatSection;
