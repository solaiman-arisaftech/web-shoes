"use client";
import React, { useState } from "react";
import red_img1 from "../../../public/resources/red_shoes1.png";
import red_img2 from "../../../public/resources/red_shoes2.png";
import red_img3 from "../../../public/resources/red_shoes3.png";
import red_img4 from "../../../public/resources/red_shoes4.png";
// import { Rating } from "flowbite-react";
import { Heart, Forward, Star } from "lucide-react";
import Image from "next/image";

const ProductDetails = (Product: any) => {
  const [count, setCount] = useState(0);
  const [srcc, setSrcc] = useState<any>(red_img1)
  const decrease = () => {
    if(count==0){
      setCount(0)
    }
    else{
      setCount(count - 1);
    }
  };
  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col  bg-white gap-10 py-28 py-36 px-4 md:px-16 lg:px-32 xl:px-64">
      <div className="flex self-center text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple pb-10 ">
        Product Details
      </div>
      <div className="w-full flex justify-center gap-20 ">
        <div className="flex w-full  md:w-2/4 gap-4 ">
          <div className="flex flex-col gap-4 p-2 w-1/5 md:w-1/6 h-48 ">
            <div className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2  hover:duration-300 opacity-80 hover:opacity-100" onClick={() => setSrcc(red_img1)}>
              <Image src={red_img1} alt="" width={200} height={200} />
            </div>
            <div className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2 hover:duration-300  opacity-80 hover:opacity-100"  onClick={() => setSrcc(red_img2)}>
              <Image src={red_img2} alt="" width={200} />
            </div>
            <div className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2 hover:duration-300  opacity-80 hover:opacity-100" onClick={() => setSrcc(red_img3)}>
              <Image src={red_img3} alt="" width={200} />
            </div>
            <div className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2 hover:duration-300  opacity-80 hover:opacity-100" onClick={() => setSrcc(red_img4)}>
              <Image src={red_img4} alt="" width={200} />
            </div>
          </div>
          <div className=" border-NeonPink shadow-md shadow-NeonPink  rounded-xl border-2 p-2 w-full flex items-center justify-center  ">
            <Image
              className="object-fit "
              src={srcc}
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className=" flex flex-col  gap-4">
          <div className="text-base text-bold text-white bg-NeonPink rounded-2xl self-start items-center flex justify-center w-28 py-1">
            New Arrival
          </div>
          <div className="text-3xl text-bold">Nike Air Max Pulse Roam </div>

          <div className="flex ">
            <Star className="fill-amber-500 stroke-none " size={20} />
            <Star className="fill-amber-500 stroke-none " size={20} />
            <Star className="fill-amber-500 stroke-none " size={20} />
            <Star className="fill-amber-500 stroke-none " size={20} />
            <Star className="fill-amber-500 stroke-none " size={20} />
          </div>

          <div className="text-3xl text-bold"> $100.99</div>
          <div>Specification</div>
          <div className="flex flex-col gap-2">
            <div className="bg-green-400 text-white w-24 flex justify-center rounded-xl ">
              In Stock
            </div>
            <div className="flex gap-2">
              <div className="text-red-500 ">Ships from china. </div>
              <div> Most customers receive within 3-31 days.</div>
            </div>
          </div>
          <div className="flex gap-4 flex items-center">
            <div className="flex flex-row h-8 w-28 rounded-lg relative bg-transparent">
              <button
                onClick={decrease}
                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400  w-10 rounded-l cursor-pointer outline-none"
              >
                <span className="m-auto text-2xl font-thin">−</span>
              </button>
              <input
            
                className="outline-none focus:outline-none text-center w-16 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                value={count}
              ></input>
              <button
                onClick={increase}
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>

            <div className=" ">
              <Heart
                className="stroke-NeonPink fill-none hover:fill-NeonPink border-2 hover:border-NeonPink p-1 rounded-md "
                width={30}
                height={32}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Available Size</div>
            <div className="flex gap-2">
              <div className="border-1 p-1 text-xs px-2 hover:bg-NeonPink hover:text-white">sm</div>
              <div className="border-1 p-1 text-xs px-2">md</div>
              <div className="border-1 p-1 text-xs px-2">lg</div>
              <div className="border-1 p-1 text-xs px-2">xl</div>
              <div className="border-1 p-1 text-xs px-2">2xl</div>
            </div>
          </div>
          <div className="hover:bg-NeonPink text-NeonPink font-bold hover:text-white  text-center rounded-2xl border-2 border-NeonPink py-1">
            Add to Cart
          </div>
          <div className="bg-NeonPink text-white font-bold text-center rounded-2xl py-1">
            Buy Now
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center self-center ">
        <div className="p-4 border-1 border-NeonPink cursor-pointer hover:text-white hover:bg-purple hover:border-none font-bold shadow-xl rounded">describtion</div>
        <div className="p-4 border-1 border-NeonPink cursor-pointer hover:text-white hover:bg-purple hover:border-none font-bold shadow-xl rounded">Reviews</div>
        <div className="p-4 border-1 border-NeonPink cursor-pointer hover:text-white hover:bg-purple hover:border-none font-bold shadow-xl rounded">Related Products</div>
      </div>
    </div>
  );
};

export default ProductDetails;
