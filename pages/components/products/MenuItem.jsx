import Image from "next/image";
import f3 from "../resource/Images/f3.png";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";

const MenuItem = () => {
  return (
    <div className=" bg-secondary rounded-3xl">
      <div className="w-full bg-[#f1f2f3] rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
        <Link href="/myProduct">
          <div className=" relative w-36 h-36 p-5 mx-auto ">
            <Image
              src={f3}
              alt=""
              className=" hover:scale-105 transition-all"
            />
          </div>
        </Link>
      </div>
      <div className=" text-white md:w-[30vw] sm:w-[20vw] w-[70vw] p-4">
        <h4 className=" font-bold mb-4">Delicious Pizza</h4>
        <p className=" text-xs md:w-[22vw] sm:w-[30vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quo
          deleniti corrupti, id minima vero voluptas non. Eaque earum, eius unde
          quod voluptates possimus quas voluptatum fugit obcaecati perspiciatis
          tempore?
        </p>
        <div className=" flex items-center justify-between p-4 2xl:w-[18vw] md:w-[24vw] sm:w-[40vw] w-[80vw]">
          <span>€20</span>
          <button className=" btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center">
            <MdShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
