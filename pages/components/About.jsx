import aboutImg from "./resource/Images/aboutImg.png";
import Image from "next/image";
import Title from "./resource/Title";

const About = () => {
  return (
    <div className=" bg-secondary py-14">
      <div className="flex items-center sm:flex-auto text-white container mx-auto sm:gap-16 gap-20 flex-wrap justify-center">
        <div>
          <div className=" sm:w-[445px] w-[300px] sm:h-[600px] h-[400px]">
            <Image src={aboutImg} />
          </div>
        </div>
        <div className=" md:w-1/2">
          <Title className=" text-[40px]">We Are Feane</Title>
          <p className=" my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            placeat inventore nostrum perspiciatis, consequatur quo ipsum minus
            tenetur enim quisquam, mollitia eaque impedit quas quibusdam. Odio
            quibusdam ullam nostrum iste?
          </p>
          <button className=" btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
