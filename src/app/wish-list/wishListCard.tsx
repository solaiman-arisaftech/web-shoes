"use client";
import React, { useState } from "react";
import Image from "next/image";
import reviewer1 from "../../../public/resources/shoes3.png";
// import { Rating } from "flowbite-react";
import { Heart, Forward, Star } from "lucide-react";


const WishListCard = () => {
    const [wish, setWish] = useState(false)
    const toggleWish=()=>{
        setWish(!wish)
    }
    const [beforeWish, setBeforeWish] = useState<Boolean> (true);
  const [afterWish, setAfterWish] = useState<Boolean> (false);
  const saveWish = () => {
    setBeforeWish(!beforeWish);
    setAfterWish(!afterWish);
  }
  return (
    <div className="group w-full border-2 flex justify-between  rounded-lg shadow-slate-500 shadow-md bg-goldlight">
      <div className="p-4 flex gap-4 ">
        <div className="rounded-lg hover:scale-125 duration-300">
          <Image
            className="rounded"
            src={reviewer1}
            alt=""
            width={70}
            height={50}
          />
        </div>
        <div className="flex flex-col text-red-500">
          <div className="font-bold text-sm text-start w-full ">
            Nike Air Max Pulse Roam
          </div>
          <div className="flex ">
            <Star className="fill-amber-500 stroke-none " size={16} />
            <Star className="fill-amber-500 stroke-none " size={16} />
            <Star className="fill-amber-500 stroke-none " size={16} />
            <Star className="fill-amber-500 stroke-none " size={16} />
            <Star className="fill-amber-500 stroke-none " size={16} />
          </div>
          <div className="font-bold">$100.99</div>
          <div className="text-xs text-justify text-slate-500">
            A breathable, moisture-wicking lining ensures that your feet remain
            comfortable and dry, even during extended shifts.
          </div>
        </div>
        
      </div>
      <div className="items-end p-4"  onClick={saveWish}>
       
          {beforeWish && <Heart className={`stroke-red-500 fill-red-500 `} />}
          {afterWish && <Heart className={`stroke-red-500 fill-none `} />}  

        </div>
        
        
    </div>
  );
};

export default WishListCard;
