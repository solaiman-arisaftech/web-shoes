/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import img1 from "../../../public/resources/shoes.png";
import { Jost } from 'next/font/google';

const HeroSection = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-center w-full min-h-screen flex justify-between self-center px-4 md:px-36 py-20 gap-10">
      <div className="flex flex-col mt-36 w-1/2 gap-10">
        <div className="flex flex-col text-7xl font-bold  ">
          <div className="text-NeonPink ">NIKE</div>
          <div className=" text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple">Collection</div>
        </div>
        <div className="font-Jost">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
      <div className="flex self-center justify-center w-1/2">
        <Image className="" src={img1} alt={""} height={400} width={420} />
      </div>
    </div>
  );
};

export default HeroSection;
