import Image from "next/image";
import f1 from "../components/resource/Images/f1.png";
import Title from "../components/resource/Title";

const Index = () => {
  return (
    <div className=" flex items-center h-screen gap-20 py-20 flex-wrap">
      <div className=" relative md:flex-1 w-[80%] h-[80%] mx-20">
        <Image src={f1} width={500} alt="" objectFit="contain" />
      </div>
      <div className=" md:flex-1 md:text-start text-center">
        <Title className=" text-6xl">Good Pizza</Title>
        <span className=" text-primary underline underline-offset-1 my-4 inline-block font-bold text-2xl">
          € 10
        </span>
        <p className=" text-sm my-4 md:pr-24 pr-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          non? Beatae voluptatem culpa accusantium ea odio officia, autem atque
          corrupti quod ullam, iure dolores facilis voluptas inventore, ex
          deleniti ratione.
        </p>
        <div>
          <h4 className=" font-bold text-xl">Choose the size</h4>
          <div className=" flex items-center gap-20 md:justify-start justify-center">
            <div className="relative flex ">
              <Image src={f1} alt="" width={50} />
              <h6 className="absolute top-0 left-6 bg-primary px-3 rounded-xl text-xs">
                Small
              </h6>
            </div>
            <div className="relative flex">
              <Image src={f1} alt="" width={80} />
              <h6 className="absolute top-0 left-8 bg-primary px-3 rounded-xl text-xs">
                Medium
              </h6>
            </div>
            <div className="relative flex">
              <Image src={f1} alt="" width={110} />
              <h6 className="absolute top-0 right-0 bg-primary px-3 rounded-xl text-sm">
                Large
              </h6>
            </div>
          </div>
        </div>
        <div className=" flex gap-x-4 mt-6 md:justify-start justify-center">
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className=" text-sm font-semibold">Ketchup</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className=" text-sm font-semibold">Mayonnaise</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className=" text-sm font-semibold">Hot sous</span>
          </label>
        </div>
        <button className="flex btn-primary my-6 w-40 md:mx-0 mx-auto">
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default Index;
