"use client";
import React, { useState, useContext, useMemo, useEffect } from "react";
import img1 from "../../../../public/resources/shoes1.png";
import Image from "next/image";
import { XCircle } from "lucide-react";
import { MyContext } from "@/app/context/myContext";

const CartDetails = ({ product, remove }: any) => {
  const { addToCart } = useContext(MyContext);

  const initialQty = product.qty;
  const [singleCartQuantity, setSingleCartQuantity] = useState(initialQty);

  const decrease = () => {
    const updatedQty = singleCartQuantity - 1;
    if (updatedQty > 1) {
      setSingleCartQuantity(updatedQty);
    } else {
      setSingleCartQuantity(1);
    }
    const formData = {
      id: product.id,
      qty: updatedQty,
      size: product.size,
      subtotal: product.price * updatedQty,
    };
    addToCart(formData);
  };
  const increase = () => {
    const updatedQuanatity = singleCartQuantity + 1;
    setSingleCartQuantity(updatedQuanatity);
    const formData = {
      id: product.id,
      qty: updatedQuanatity,
      size: product.size,
      subtotal: product.price * updatedQuanatity,
    };
    addToCart(formData);
  };

  // useEffect(() => {
  //   const formData = {
  //     id: product.id,
  //     qty: qty1,
  //     size: product.size,
  //     subtotal: (product.price * qty1),
  //   };

  // }, [increase, decrease]);

  return (
    <div className=" bg-white flex  justify-evenly items-center p-4 gap-4 border-b-1 z-40 overflow-y-hidden ">
      <div className="">
        <Image src={img1} alt="" width={40} />
      </div>
      <div className="text-start text-sm w-32 grid grid-col">
        {product.title}
        <span>Size: {product.size} </span>
      </div>
      <div className="text-start text-sm">${product.price}</div>
      <div className="flex flex-row justify-start h-8 w-24 rounded-lg mx-2 bg-transparent ">
        <button
          onClick={decrease}
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400  h-full  w-1/4 rounded-l cursor-pointer "
        >
          <span className="m-auto font-bold p-2 ">−</span>
        </button>
        <input
          className="outline-none focus:outline-none text-center text-sm w-1/2 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 "
          value={singleCartQuantity}
          // onChange={(e) => setSingleCartQuantity(+e.target.value)}
          readOnly
        ></input>
        <button
          onClick={increase}
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-1/4 rounded-r cursor-pointer"
        >
          <span className="m-auto  font-bold p-2">+</span>
        </button>
      </div>

      <div className=" text-start text-sm ">
        ${product.price * singleCartQuantity}
      </div>

      <div className="flex justify-end  cursor-pointer w-10 " onClick={remove}>
        <XCircle className="fill-red-500 stroke-white hover:-translate-y-1 hover:scale-125 duration-300 " />
      </div>
    </div>
  );
};

export default CartDetails;
function getItem(arg0: string): any {
  throw new Error("Function not implemented.");
}
