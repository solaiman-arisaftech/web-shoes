"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../../public/resources/shoes3.png";
import { Rating } from "flowbite-react";
import { Heart, Forward, Star } from "lucide-react";


const ProductCard = () => {
  return (
    <div className="group w-full  border-2 flex flex-col items-center rounded-lg shadow-purple shadow-md bg-white py-5">
      <div className="flex flex-col absolute self-start mx-4 mt-4 gap-2  -translate-x-4 invisible group-hover:visible group-hover:translate-x-1 duration-75 delay-75">
      <Heart className="stroke-none fill-black hover:fill-NeonPink border-2 p-2 rounded-md " width={45} height={45} />
      <Forward className="stroke-fill stroke-2 stroke-black hover:stroke-NeonPink border-2 p-2 rounded-md" width={45} height={45} />
      </div>
      <div className=" w-1/2 p-4 group-hover:translate-y-1 group-hover:scale-125 duration-300 relative">
        <Image className="group-hover:rotate-45 group-hover:transition-300 group-hover:translate-x-5 group-hover:delay-50 transition-transform " src={img1} alt="" />
      </div>
      <div className=" flex flex-col p-4 gap-4">
        <div className="text-center text-3xl font-bold">NIKE</div>
        <div className="text-center text-slate-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </div>
        <div className="text-center font-bold text-lg">$100.99</div>
        <Rating className=" self-center ">
            <Star className="fill-amber-500 stroke-none " size={20}/>
            <Star className="fill-amber-500 stroke-none " size={20}/>
            <Star className="fill-amber-500 stroke-none " size={20}/>
            <Star className="fill-amber-500 stroke-none " size={20}/>
            <Star className="fill-amber-500 stroke-none " size={20}/>
          </Rating>
        <button className="w-1/2  rounded self-center text-center text-white p-2 bg-gradient-to-r from-NeonPink to-purple hover:-translate-y-1 hover:scale-110 duration-200">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
