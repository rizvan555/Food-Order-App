import Image from "next/image";
import o1 from "./Images/o1.jpg";

const CampaignItems = () => {
  return (
    <div className="">
      <div className=" border-4 border-primary rounded-full">
        <Image src={o1} className=" w-32 h-32 rounded-full" />
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className=" flex container mx-auto py-20">
      <CampaignItems />
      <CampaignItems />
    </div>
  );
};

export default Campaigns;
