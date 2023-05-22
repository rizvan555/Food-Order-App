import Image from "next/image";
import o1 from "./Images/o1.jpg";
import Title from "./Title";
import { MdShoppingCart } from "react-icons/md";

const CampaignItems = () => {
  return (
    <div className="flex items-center bg-secondary w-[30vw] p-3 gap-x-4">
      <div className=" border-4 border-primary w-36 h-36 rounded-full p-1">
        <Image
          src={o1}
          className=" w-32 h-32 rounded-full hover:scale-105 transition-all"
        />
      </div>
      <div className=" flex flex-col text-white">
        <Title className=" text-2xl">Tasty Thursdays</Title>
        <div className=" text-white font-dancing">
          <span className="text-[40px] ">20%</span>
          <span className=" text-sm ml-1">Off</span>
        </div>
        <button className=" flex items-center mx-auto bg-primary rounded-3xl py-2 px-7 mt-3 gap-2">
          <MdShoppingCart />
          Order Now
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className=" flex justify-between container mx-auto py-20 w-[70vw] flex-wrap">
      <CampaignItems />
      <CampaignItems />
    </div>
  );
};

export default Campaigns;
