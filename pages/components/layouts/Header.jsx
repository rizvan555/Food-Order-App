import { useState } from "react";
import Logo from "../resource/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import Search from "../resource/Search";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [hamburger, setHamburger] = useState(true);
  const router = useRouter();

  return (
    <div
      className={`h-[5.5rem] z-40 relative ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="flex justify-between items-center h-full container mx-auto text-white">
        <div>
          <Logo />
        </div>
        {hamburger ? (
          <nav className="md:static absolute top-0 left-0  md:w-auto md:h-auto w-full h-full md:text-white text-black md:bg-transparent bg-white md:flex hidden">
            <ul className="flex font-openSans gap-10 md:flex-row flex-col items-center ml-96">
              <li className="px-[5px] py-[20px] uppercase hover:text-primary">
                <Link href="/">Home</Link>
              </li>
              <li className="px-[5px] py-[20px] uppercase hover:text-primary">
                <Link href="/menu">Menu</Link>
              </li>
              <li className="px-[5px] py-[20px] uppercase hover:text-primary">
                <Link href="/about">About</Link>
              </li>
              <li className="px-[5px] py-[20px] uppercase hover:text-primary">
                <Link href="/reservation">Book Table</Link>
              </li>
            </ul>
            {hamburger ? (
              <button
                className="absolute top-10 right-10 "
                onClick={() => setHamburger(!hamburger)}
              >
                <GiCancel size={30} className="hover:text-primary md:hidden" />
              </button>
            ) : (
              ""
            )}
          </nav>
        ) : (
          <nav className="md:static absolute top-0 left-0  md:w-auto md:h-auto w-full h-screen md:text-white text-black md:bg-transparent bg-white grid place-content-center">
            <ul className="flex font-openSans gap-4 md:flex-row flex-col items-center">
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
            {hamburger ? (
              ""
            ) : (
              <button
                className="absolute top-10 right-10 "
                onClick={() => setHamburger(!hamburger)}
              >
                <GiCancel size={30} className="hover:text-primary sm:flex" />
              </button>
            )}
          </nav>
        )}

        <div className=" flex items-center gap-4 ml-10">
          <Link href="/auth/login">
            <FaUserAlt className=" hover:text-primary" />
          </Link>
          <a href="#">
            <FaShoppingCart className=" hover:text-primary" />
          </a>
          <button onClick={() => setSearch(true)}>
            <FaSearch className=" hover:text-primary" />
          </button>
          <a href="#" className=" md:inline-block hidden sm">
            <button className=" btn-primary text-xs">Order Online</button>
          </a>
          <button className=" md:hidden inline-block">
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
