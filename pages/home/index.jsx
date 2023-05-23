import About from "../components/About";
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
    </div>
  );
};

export default Index;
