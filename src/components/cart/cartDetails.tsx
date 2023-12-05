"use client";
import React, { useState, useContext } from "react";
import img1 from "../../../public/resources/shoes1.png";
import Image from "next/image";
import { XCircle } from "lucide-react";
import { MyContext } from "@/app/context/myContext";

const CartDetails = ({ product, remove }: any) => {
  // console.log("product", title);

  const { setQuantityCount, addToCart } = useContext(MyContext);

  const [qty1, setQty1] = useState(product.qty);

  const decrease = () => {
    if (qty1 <= 1) {
      setQty1(1);
    } else {
      setQty1(qty1 - 1);
    }
  };
  const increase = () => {
    setQty1(qty1 + 1);
  };

  return (
    <div className=" bg-white  flex justify-between items-center  p-4 gap-4 border-b-1 z-40 overflow-y-hidden ">
      <div>
        <Image src={img1} alt="" width={40} />
      </div>
      <div className="text-start text-sm w-36">
        {product.title}
        <sub>({product.size} )</sub>
      </div>

      <div className="flex flex-row h-8 w-24 rounded-lg relative bg-transparent">
        <button
          onClick={decrease}
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400  w-10 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto font-bold p-2 ">−</span>
        </button>
        <input
          className="outline-none focus:outline-none text-center text-sm w-16 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 "
          value={qty1}
        ></input>
        <button
          onClick={increase}
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
        >
          <span className="m-auto  font-bold p-2">+</span>
        </button>
      </div>
      <div className="w-20 text-center text-sm overflow-hidden ">
        ${product.price * qty1}
      </div>
      <div className=" cursor-pointer " onClick={remove}>
        <XCircle className="fill-red-500 stroke-white hover:-translate-y-1 hover:scale-125 duration-300" />
      </div>
    </div>
  );
};

export default CartDetails;
function getItem(arg0: string): any {
  throw new Error("Function not implemented.");
}
