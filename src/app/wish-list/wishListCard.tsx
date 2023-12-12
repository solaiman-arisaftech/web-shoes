"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import reviewer1 from "../../../public/resources/shoes3.png";
import { MyContext } from "@/app/context/myContext";
// import { Rating } from "flowbite-react";
import { Heart, Forward, Star } from "lucide-react";

const WishListCard = ({ product, removeWish }: any) => {
  const { addToCart, addToWish } = useContext(MyContext);

  const [wish, setWish] = useState(false);
  const toggleWish = () => {
    setWish(!wish);
  };
  const [beforeWish, setBeforeWish] = useState<Boolean>(true);
  const [afterWish, setAfterWish] = useState<Boolean>(false);
  const saveWish = () => {
    setBeforeWish(afterWish);
    setAfterWish(beforeWish);
  };

  return (

    <tr className="flex justify-between text-center p-4 border-b-1 w-full">
      <td>{}.</td>
      <td className="rounded-lg hover:scale-125 self-center flex justify-center duration-300  w-1/4">
        <Image
          className="rounded self-center"
          src={reviewer1}
          alt=""
          width={70}
          height={50}
        />
      </td>
      <td className="flex flex-col justify-center text-center  w-1/4">
        <span className="font-bold">{product.title}</span>
        <span className="text-xs">{product.desc}</span>
      </td>

      <td className="flex justify-center items-center font-bold text-center w-1/4 ">
        ${product.price}.00
      </td>

      <td
        className="flex flex-col gap-2 justify-center items-center text-center p-4 w-1/4"
        onClick={saveWish}
      >
        <div
          className="w-1/2 rounded text-sm font-bold text-center p-1 bg-gray-300 text-black hover:bg-red-700 hover:text-white hover:scale-110 duration-200 cursor-pointer"
          onClick={removeWish}
        >
          DELETE
        </div>

        <div
          className="w-1/2 rounded self-center text-sm text-center text-white p-1 bg-gray-500 hover:bg-gray-400  hover:scale-110 duration-200 cursor-pointer"
          onClick={()=>addToCart(product)}
        >
          Add To Cart
        </div>
      </td>
    </tr>

  );
};

export default WishListCard;
