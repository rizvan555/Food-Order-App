import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../resource/Title";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import SosialMedia from "../resource/SosialMedia";

const Footer = () => {
  const [footer, setFooter] = useState([]);

  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="grid md:grid-cols-3 grid-rows gap-y-12 md:gap-x-28 text-center">
          <div className="md:justify-start mx-auto ">
            <Title className="text-[30px]">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <span className="flex items-center ml-2 gap-4">
                <MdLocationOn />
                Location
              </span>
              <span className="flex items-center ml-2 gap-4">
                <MdPhone />
                Call +90 {footer?.phoneNumber}
              </span>
              <span className="flex items-center ml-2 gap-4">
                <MdEmail />
                demo@gmail.com
              </span>
            </div>
          </div>
          <div className="grid grid-cols">
            <Title className="text-[38px]">Feane</Title>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              cumque neque soluta beatae laboriosam. Ab ea natus eligendi. Minus
              similique velit dolorum dolores ut facere laboriosam. Molestiae
              iusto nihil a.
            </p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              <SosialMedia />
            </div>
          </div>
          <div className="grid-grid-cols ">
            <Title className="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div>
                <span className="inline-block ml-2">10.00 Am - 10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2022 All Rights Reserved By Free Html Templates
        </p>
      </div>
    </div>
  );
};

export default Footer;
