import Image from "next/image";
import React from "react";

function CustomersItem({ imgSrc }) {
  return (
    <div className="mt-5 mr-6">
      <div className=" p-6 bg-secondary text-white rounded-[5px]">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          sapiente aliquid dolor, autem eos, odit voluptatibus perferendis
          corrupti, nihil expedita dolorum. Laboriosam assumenda, numquam
          recusandae officiis ab blanditiis accusamus! Dolorum.
        </p>
        <div className=" flex flex-1 mt-4">
          <span className="text-lg font-semibold">moana Michael</span>
          <span className="text-[15px]">maqna aliqua</span>
        </div>
      </div>
      <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 before:content-[''] before:absolute before:top-0  flex justify-center before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5 ">
        <Image
          src={imgSrc}
          alt="client2"
          className="rounded-full"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default CustomersItem;
