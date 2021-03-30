import { Button, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

import { StyledCard, StyledBody } from "shared/components/card";

interface DogPicture {
  loading: boolean;
  url: string;
}

const DogSection = () => {
  const [dogPicture, setDogPicture] = useState<DogPicture>({
    loading: false,
    url: "",
  });

  const getDogPicture = async () => {
    setDogPicture({ loading: true, url: "" });
    const dogPictureAPIUrl = "https://dog.ceo/api/breeds/image/random";
    const response = await axios.get<{ message: string }>(dogPictureAPIUrl);
    setDogPicture({ loading: false, url: response.data.message });
  };

  return (
    <Row className="justify-content-md-center align-items-center">
      <Col md="4">
        <StyledCard className="text-center">
          {!!dogPicture.url && <Card.Img src={dogPicture.url} />}
          <StyledBody>
            <Button variant="dark" onClick={getDogPicture}>
              {dogPicture.loading ? "Loading..." : "Random Dog!"}
            </Button>
          </StyledBody>
        </StyledCard>
      </Col>
    </Row>
  );
};

export default DogSection;
