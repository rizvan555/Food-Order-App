import Slider from "react-slick";
import Image from "next/image";
import heroBg from "./Images/heroBg.jpg";
import Title from "./Title";

const Carousel = () => {
  return (
    <section className="  w-full h-[calc(100vh-88px)] container">
      <div className=" absolute h-full w-full">
        <Image src={heroBg} className="w-full h-full" />
      </div>
      <div className=" relative text-white z-50 pt-[20vh] pl-5vw flex flex-col items-start gap-y-10 w-[60vw]">
        <Title className=" text-6xl">Fast Food Restaurant</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa
          vel, sint inventore nemo odit cupiditate quasi repellat facere
          consectetur eveniet possimus reiciendis libero doloribus. Assumenda
          impedit saepe porro dolores!
        </p>
        <button className=" btn-primary">Order Now</button>
      </div>
    </section>

    // <Slider {...settings}>
    //   <div>
    //     <h3>1</h3>
    //   </div>
    //   <div>
    //     <h3>2</h3>
    //   </div>
    //   <div>
    //     <h3>3</h3>
    //   </div>
    //   <div>
    //     <h3>4</h3>
    //   </div>
    //   <div>
    //     <h3>5</h3>
    //   </div>
    //   <div>
    //     <h3>6</h3>
    //   </div>
    // </Slider>
  );
};

export default Carousel;
