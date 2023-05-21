import { useState } from "react";
import Logo from "../resource/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import Search from "../resource/Search";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="flex justify-between items-center h-full container mx-auto text-white">
        <div>
          <Logo />
        </div>
        {hamburger ? (
          <nav className=" sm:static absolute top-0 left-0 grid place-content-center w-full h-full sm:text-white text-black">
            <ul className="flex font-openSans gap-5 text-l sm:flex-row flex-col items-center">
              <li className="px-[5px] py-[20px] uppercase hover:text-primary">
                <a href="">Home</a>
              </li>
              <li className="px-[5px] py-[20px] uppercase hover:text-primary">
                <a href="">Menu</a>
              </li>
              <li className="px-[5px] py-[20px] uppercase hover:text-primary">
                <a href="">About</a>
              </li>
              <li className="px-[5px] py-[20px] uppercase hover:text-primary">
                <a href="">Book Table</a>
              </li>
            </ul>
          </nav>
        ) : (
          ""
        )}

        <div className=" flex items-center gap-3">
          <a href="#">
            <FaUserAlt className=" hover:text-primary" />
          </a>
          <a href="#">
            <FaShoppingCart className=" hover:text-primary" />
          </a>
          <button onClick={() => setSearch(true)}>
            <FaSearch className=" hover:text-primary" />
          </button>
          <a href="#" className=" md:inline-block hidden sm">
            <button className=" btn-primary text-xs">Order Online</button>
          </a>
          <button className=" sm:hidden inline-block">
            <RxHamburgerMenu
              className=" text-xl hover:text-primary"
              onClick={() => setHamburger(!hamburger)}
            />
          </button>
        </div>
      </div>
      {search ? <Search setSearch={setSearch} /> : null}
    </div>
  );
};

export default Header;
