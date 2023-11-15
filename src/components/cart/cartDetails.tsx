"use client";
import React, { useState } from "react";
import img1 from "../../../public/resources/shoes1.png";
import Image from "next/image";
import { XCircle } from 'lucide-react';
const CartDetails = ({ product, idIndexObject }: any) => {

  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count == 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className=" bg-white  flex justify-between items-center  p-4 gap-4 border-b-1 z-40 overflow-y-hidden ">
      
        <div><Image src={img1} alt="" width={30} /></div>
        <h4 className="text-start">{product.tittle}</h4>
        <div className="">
          <p>{product.desc}</p>
        </div>
        <div className="flex flex-row h-8 w-28 rounded-lg relative bg-transparent">
              <button
                onClick={decrease}
                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400  w-10 rounded-l cursor-pointer outline-none"
              >
                <span className="m-auto text-2xl font-thin">−</span>
              </button>
              <input
                className="outline-none focus:outline-none text-center w-16 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 "
                value={count}
              ></input>
              <button
                onClick={increase}
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
        <div className="w-20 text-center overflow-hidden">${product.price * count}</div>
        <div className=" cursor-pointer ">
          <XCircle className="fill-red-500 stroke-white hover:-translate-y-1 hover:scale-125 duration-300"/>
        </div>
      
    </div>
  );
};

export default CartDetails;
