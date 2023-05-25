import React from "react";
import About from "../components/About";
import Reservation from "../components/Reservation";
import MenuWrapper from "../components/products/MenuWrapper";
import Campaigns from "../components/resource/Campaigns";
import Carousel from "../components/resource/carousel";
import Customers from "../components/customers/Customers";

const Index = () => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Index;
