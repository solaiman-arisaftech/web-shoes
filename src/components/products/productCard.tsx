import React from "react";
import Image from "next/image";

import img1 from "../../../public/resources/shoes3.png";

const ProductCard = () => {
  return (
    <div className="w-full  border-2 flex flex-col items-center rounded-lg shadow-purple shadow-md bg-white">

      <div className="w-1/2 p-4">
        <Image src={img1} alt=""/>
      </div>
      <div className=" flex flex-col p-4 gap-2">
        <div className="text-center text-3xl font-bold">NIKE</div>
        <div className="text-center text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit</div>
        <div className="text-center font-bold text-lg">$100.99</div>
        <div>
         
        </div>
        <button className="w-1/2 transition duration-200 ease-in-out  rounded-sm self-center text-center text-white p-1 bg-gradient-to-r from-NeonPink to-purple">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
