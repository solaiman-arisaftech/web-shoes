"use client";
import React, { useState, useContext } from "react";
import img1 from "../../../../public/resources/shoes1.png";
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
      handleQtyFromCart();
    } else {
      setQty1(qty1 - 1);
      handleQtyFromCart();
    }
  };
  const increase = () => {
    setQty1(qty1 + 1);
    handleQtyFromCart();
  };
  const handleQtyFromCart = () => {
    const formData = {
      id: product.id,
      title: product.title,
      price: product.price,
      qty: qty1,
      size: product.size,
    };
    addToCart(formData);
  };

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
          onChange={handleQtyFromCart}
          onClick={decrease}
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400  h-full  w-1/4 rounded-l cursor-pointer "
        >
          <span className="m-auto font-bold p-2 ">−</span>
        </button>
        <input
          className="outline-none focus:outline-none text-center text-sm w-1/2 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 "
          value={qty1}
          onChange={(e) => setQty1(+e.target.value)}
        ></input>
        <button
          onChange={handleQtyFromCart}
          onClick={increase}
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-1/4 rounded-r cursor-pointer"
        >
          <span className="m-auto  font-bold p-2">+</span>
        </button>
      </div>

      <div className=" text-start text-sm ">${product.price * qty1}</div>

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
