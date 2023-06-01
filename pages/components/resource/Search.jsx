import OutsideClickHandler from "react-outside-click-handler";
import Title from "../resource/Title";
import f1 from "./Images/f1.png";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";

const Search = ({ setSearch }) => {
  return (
    <div className=" fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-slate-400 after:absolute after:top-0 after:left-0 opacity-90  grid place-content-center">
      <OutsideClickHandler
        onOutsideClick={() => {
          setSearch(false);
        }}
      >
        <div className="w-full h-full grid place-content-center ">
          <div className=" relative z-50 md:w-[500px] w-[370px] bg-white border-2 p-10 rounded-2xl">
            <Title className=" text-[40px] text-center">Search</Title>
            <input
              type="text"
              placeholder="Search ..."
              className="border w-full my-10"
            />
            <ul>
              <li className=" flex items-center justify-between hover:bg-primary px-2 py-1 transition-all">
                <div className=" relative flex">
                  <Image src={f1} alt="image1" width={48} height={48} />
                </div>
                <span className=" font-bold">Good Pizza</span>
                <p className=" font-bold">$10</p>
              </li>
              <li className=" flex items-center justify-between hover:bg-primary px-2 py-1 transition-all">
                <div className=" relative flex">
                  <Image src={f1} alt="image2" width={48} height={48} />
                </div>
                <span className=" font-bold">Good Pizza</span>
                <p className=" font-bold">$12</p>
              </li>
              <li className=" flex items-center justify-between hover:bg-primary px-2 py-1 transition-all">
                <div className=" relative flex">
                  <Image src={f1} alt="image3" width={48} height={48} />
                </div>
                <span className=" font-bold">Can Burger</span>
                <p className=" font-bold">$15</p>
              </li>
              <li className=" flex items-center justify-between hover:bg-primary px-2 py-1 transition-all">
                <div className=" relative flex">
                  <Image src={f1} alt="image4" width={48} height={48} />
                </div>
                <span className=" font-bold">Good Pizza</span>
                <p className=" font-bold">$20</p>
              </li>
            </ul>
            <button
              className=" absolute top-5 right-5"
              onClick={() => setSearch(false)}
            >
              <GiCancel size={30} className=" hover:text-primary" />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
