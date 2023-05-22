import Slider from "react-slick";
import Image from "next/image";
import heroBg from "./Images/heroBg.jpg";
import Title from "./Title";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <section className="  w-full h-screen container -mt-[88px]">
      <div className=" absolute h-full w-full">
        <Image src={heroBg} className="w-full h-full" />
      </div>
      <Slider {...settings}>
        <div>
          <div className=" relative text-white z-30 pt-[25vh] pl-[5vw] flex flex-col items-start gap-y-20 w-[50vw]">
            <Title className=" text-6xl">Fast Food Restaurant</Title>
            <p className=" text-md  w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              culpa vel, sint inventore nemo odit cupiditate quasi repellat
              facere consectetur eveniet possimus reiciendis libero doloribus.
              Assumenda impedit saepe porro dolores!
            </p>
            <button className=" btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className=" relative text-white z-30 pt-[25vh] pl-[5vw] flex flex-col items-start gap-y-20 w-[50vw]">
            <Title className=" text-6xl">Fast Food Restaurant</Title>
            <p className=" text-md  w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              culpa vel, sint inventore nemo odit cupiditate quasi repellat
              facere consectetur eveniet possimus reiciendis libero doloribus.
              Assumenda impedit saepe porro dolores!
            </p>
            <button className=" btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className=" relative text-white z-30 pt-[25vh] pl-[5vw] flex flex-col items-start gap-y-20 w-[50vw]">
            <Title className=" text-6xl">Fast Food Restaurant</Title>
            <p className=" text-md  w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              culpa vel, sint inventore nemo odit cupiditate quasi repellat
              facere consectetur eveniet possimus reiciendis libero doloribus.
              Assumenda impedit saepe porro dolores!
            </p>
            <button className=" btn-primary">Order Now</button>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Carousel;
