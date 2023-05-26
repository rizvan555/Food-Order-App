import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";

function SosialMedia() {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.facebook.com/"
        className=" w-12 h-12 bg-white rounded-full flex justify-center items-center text-black hover:scale-105 hover:text-primary transition-all"
      >
        <GrFacebookOption size={25} />
      </a>
      <a
        href="https://www.facebook.com/"
        className=" w-12 h-12 bg-white rounded-full flex justify-center items-center text-black hover:scale-105 hover:text-primary transition-all"
      >
        <GrLinkedinOption size={25} />
      </a>
      <a
        href="https://www.facebook.com/"
        className=" w-12 h-12 bg-white rounded-full flex justify-center items-center text-black hover:scale-105 hover:text-primary transition-all"
      >
        <FiTwitter size={25} />
      </a>
      <a
        href="https://www.facebook.com/"
        className=" w-12 h-12 bg-white rounded-full flex justify-center items-center text-black hover:scale-105 hover:text-primary transition-all"
      >
        <AiFillInstagram size={25} />
      </a>
    </div>
  );
}

export default SosialMedia;
