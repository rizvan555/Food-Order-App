import Title from "../resource/Title";
import MenuItem from "./MenuItem";
import f1 from "../resource/Images/f1.png";
import f2 from "../resource/Images/f2.png";
import f3 from "../resource/Images/f3.png";
import f4 from "../resource/Images/f4.png";
import f5 from "../resource/Images/f5.png";
import f6 from "../resource/Images/f6.png";

const MenuWrapper = () => {
  return (
    <div className=" container mx-auto mb-16">
      <div className="flex flex-col items-center mb-[70px]">
        <Title className="text-[40px]">Our Menu</Title>
        <div className=" mt-10">
          <button className="px-6 py-2 bg-secondary rounded-3xl text-white">
            All
          </button>
          <button className="px-6 py-2  rounded-3xl">Burger</button>
          <button className="px-6 py-2  rounded-3xl">Pizza</button>
          <button className="px-6 py-2  rounded-3xl">Drink</button>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <MenuItem imageSrc={f1}/>
        <MenuItem imageSrc={f2} />
        <MenuItem imageSrc={f3} />
        <MenuItem imageSrc={f4} />
        <MenuItem imageSrc={f5} />
        <MenuItem imageSrc={f6} />
      </div>
    </div>
  );
};

export default MenuWrapper;
