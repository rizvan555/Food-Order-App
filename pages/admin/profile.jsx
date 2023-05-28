import Image from "next/image";
import admin from "../components/resource/Images/admin.png";
import { MdNoFood } from "react-icons/md";
import { BiCategoryAlt, BiDockBottom } from "react-icons/bi";
import { FaMotorcycle } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { useState } from "react";
import Products from "../components/admin/Products";
import Order from "../components/admin/Order";
import Categories from "../components/admin/Categories";

function Profile() {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col lg:mb-10 mb-10">
      <div className="lg:w-80 1-100 flex-shrink-0">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
          <Image
            src={admin}
            alt="admin"
            width={100}
            height={100}
            className=" rounded-full"
          />
          <b className="text-2xl mt-1">Admin</b>
        </div>
        <ul className="text-center font-semibold">
          <li
            className={`flex items-center gap-2 border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all px-5 ${
              tabs === 0 ? "bg-primary" : ""
            }`}
            onClick={() => setTabs(0)}
          >
            <MdNoFood />
            <button>Products</button>
          </li>
          <li
            className={`flex items-center gap-2 border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all px-5 ${
              tabs === 1 ? "bg-primary" : ""
            }`}
            onClick={() => setTabs(1)}
          >
            <FaMotorcycle />
            <button>Orders</button>
          </li>
          <li
            className={`flex items-center gap-2 border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all px-5 ${
              tabs === 2 ? "bg-primary" : ""
            }`}
            onClick={() => setTabs(2)}
          >
            <BiCategoryAlt />
            <button>Categories</button>
          </li>
          <li
            className={`flex items-center gap-2 border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all px-5 ${
              tabs === 3 ? "bg-primary" : ""
            }`}
            onClick={() => setTabs(3)}
          >
            <BiDockBottom />
            <button>Footer</button>
          </li>
          <li
            className={`flex items-center gap-2 border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all px-5 ${
              tabs === 4 ? "bg-primary" : ""
            }`}
            onClick={() => setTabs(4)}
          >
            <ImExit />
            <button>Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 ? <Products /> : ""}
      {tabs === 1 ? <Order /> : ""}
      {tabs === 2 ? <Categories /> : ""}
    </div>
  );
}

export default Profile;
