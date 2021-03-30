import { Col, Image, Row } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

import { StyledCard, StyledBody } from "shared/components/card";

interface WeatherData {
  name: string;
  main: {
    feels_like: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: [
    {
      main: string;
      icon: string;
    }
  ];
}

const WeatherSection = () => {
  const [weather, setWeather] = useState<WeatherData>();

  useEffect(() => {
    const url = "https://api.openweathermap.org/data/2.5/weather";

    const params = {
      id: 3871336,
      units: "metric",
      appid: process.env.REACT_APP_WEATHER_API_KEY,
    };

    const getWeather = async () => {
      const response = await axios.post<WeatherData>(url, null, { params });
      setWeather(response.data);
    };
    getWeather();
  }, []);

  return (
    <Row className="justify-content-md-center align-items-center">
      {!!weather && (
        <Col md="4">
          <StyledCard className="text-center">
            <StyledBody className="pb-0">
              <Image
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              />
            </StyledBody>
            <StyledBody>
              {`${weather.name}, ${weather.weather[0].main}`}
            </StyledBody>
            <StyledBody>{`Current: ${Math.round(
              weather.main.temp
            )}°. Max: ${Math.round(weather.main.temp_max)}°, Min: ${Math.round(
              weather.main.temp_min
            )}°`}</StyledBody>
            <StyledBody>{`Feels like: ${Math.round(
              weather.main.feels_like
            )}°`}</StyledBody>
          </StyledCard>
        </Col>
      )}
    </Row>
  );
};

export default WeatherSection;
