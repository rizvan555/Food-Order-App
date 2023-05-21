import { useState } from "react";
import Logo from "../resource/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../resource/Search";

const Header = () => {
  const [search, setSearch] = useState(false);

  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="flex justify-between items-center h-full container mx-auto text-white">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex font-openSans gap-5 text-l">
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
          <a href="#">
            <button className=" btn-primary text-xs">Order Online</button>
          </a>
        </div>
      </div>
      {search ? <Search setSearch={setSearch} /> : null}
    </div>
  );
};

export default Header;
