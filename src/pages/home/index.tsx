import Slider from "./slider";
import CatSection from "./cat-section";
import DogSection from "./dog-section";
import WeatherSection from "./weather-section";
import StackSection from "./stack-section";

const Home = () => {
  return (
    <>
      <Slider />
      <br />
      <CatSection />
      <br />
      <DogSection />
      <br />
      <WeatherSection />
      <br />
      <StackSection />
    </>
  );
};

export default Home;
