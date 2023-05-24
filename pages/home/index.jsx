import About from "../components/About";
import Reservation from "../components/Reservation";
import MenuWrapper from "../components/products/MenuWrapper";
import Campaigns from "../components/resource/Campaigns";
import Carousel from "../components/resource/carousel";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
    </div>
  );
};

export default Index;
