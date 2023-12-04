"use client";
import React, { useState } from "react";
import Image from "next/image";
import reviewer1 from "../../../public/resources/shoes3.png";
// import { Rating } from "flowbite-react";
import { Heart, Forward, Star } from "lucide-react";

const WishListCard = ({ product, removeWish }: any) => {
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
    // <tbody className="group w-full border-2 flex justify-between  rounded-lg shadow-slate-500 shadow-md bg-goldlight">
    <tr className="p-4 flex gap-4 ">
      <td className="rounded-lg hover:scale-125 duration-300">
        <Image
          className="rounded"
          src={reviewer1}
          alt=""
          width={70}
          height={50}
        />
      </td>
      <td className="flex flex-col text-red-500">
        <div className="font-bold text-sm text-start w-full ">
          {product.title}
        </div>
        {/* <div className="flex ">
            <Star className="fill-amber-500 stroke-none " size={16} />
            <Star className="fill-amber-500 stroke-none " size={16} />
            <Star className="fill-amber-500 stroke-none " size={16} />
            <Star className="fill-amber-500 stroke-none " size={16} />
            <Star className="fill-amber-500 stroke-none " size={16} />
          </div> */}
      </td>
      {/* <td className="text-xs text-justify text-slate-500">{product.desc}</td> */}
      <td className="font-bold">{product.price}</td>

      <td className="items-center p-4" onClick={saveWish}>
        <div onClick={removeWish}>
          {beforeWish && (
            <Heart className={`stroke-red-500 fill-red-500 cursor-pointer`} />
          )}
        </div>
        <div>
          {afterWish && (
            <Heart className={`stroke-red-500 fill-none cursor-pointer`} />
          )}
        </div>
      </td>
    </tr>
    // </tbody>
  );
};

export default WishListCard;
