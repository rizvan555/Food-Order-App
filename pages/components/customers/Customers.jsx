import Title from "../resource/Title";
import CustomersItem from "./CustomersItem";
import client1 from "../resource/Images/client1.jpg";
import client2 from "../resource/Images/client2.jpg";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customers = () => {
  const NextBtn = ({ onClick }) => {
    return (
      <button
        className="absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white "
        onClick={onClick}
      >
        <IoIosArrowBack size={30} />
      </button>
    );
  };
  const PrewBtn = ({ onClick }) => {
    return (
      <button
        className="absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white ml-4"
        onClick={onClick}
      >
        <IoIosArrowForward size={30} />
      </button>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoSpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrewBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto mt-12 mb-20">
      <Title className=" text-[40px] text-center">What Says Our Customer</Title>
      <Slider {...settings}>
        <CustomersItem imgSrc={client2} />
        <CustomersItem imgSrc={client1} />
        <CustomersItem imgSrc={client2} />
        <CustomersItem imgSrc={client1} />
      </Slider>
    </div>
  );
};

export default Customers;
