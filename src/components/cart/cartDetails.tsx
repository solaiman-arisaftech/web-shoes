"use client";
import React, { useState, useContext } from "react";
import img1 from "../../../public/resources/shoes1.png";
import Image from "next/image";
import { XCircle } from 'lucide-react';

const CartDetails = ({ product, remove, idIndexObject }: any) => {

  const [quantityCount, setQuantityCount] = useState(1);

  const decrease = () => {
    if (quantityCount == 0) {
      setQuantityCount(0);
    } else {
      setQuantityCount(quantityCount - 1);
    }
  };
  const increase = () => {
    setQuantityCount(quantityCount + 1);
  };

  

  return (
    <div className=" bg-white  flex justify-between items-center  p-4 gap-4 border-b-1 z-40 overflow-y-hidden ">
      
        <div><Image src={img1} alt="" width={30} /></div>
        <h4 className="text-start text-sm w-36">{product.tittle}</h4>
        {/* <div className="w-20 text-xs">
          <p>{product.desc}</p>
        </div> */}
        <div className="flex flex-row h-8 w-28 rounded-lg relative bg-transparent">
              <button
                onClick={decrease}
                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400  w-10 rounded-l cursor-pointer outline-none"
              >
                <span className="m-auto font-bold ">−</span>
              </button>
              <input
                className="outline-none focus:outline-none text-center text-sm w-16 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 "
                value={quantityCount}
              ></input>
              <button
                onClick={increase}
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
              >
                <span className="m-auto  font-bold">+</span>
              </button>
            </div>
        <div className="w-20 text-center text-sm overflow-hidden ">${product.price * quantityCount}</div>
        <div className=" cursor-pointer " onClick={remove}>
          <XCircle className="fill-red-500 stroke-white hover:-translate-y-1 hover:scale-125 duration-300"/>
        </div>
      
    </div>
  );
};

export default CartDetails;
