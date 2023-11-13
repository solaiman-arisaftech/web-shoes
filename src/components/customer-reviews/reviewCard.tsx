"use client";
import React from "react";
import Image from "next/image";
import reviewer1 from "../../../public/resources/gir_dp2.jpg";
// import { Rating } from "flowbite-react";
import { Heart, Forward, Star } from "lucide-react";

const ReviewCard = () => {
  return (
    <div className="group w-full p-4 border-2 flex flex-col items-center rounded-lg shadow-slate-500 shadow-md bg-goldlight">
      <div className="p-4 flex items-start self-start justify-start gap-4 ">
        <div className="rounded-lg hover:scale-125 duration-300">
          <Image
            className="rounded"
            src={reviewer1}
            alt=""
            width={30}
            height={30}
          />
        </div>
        <div className="flex flex-col text-red-500" style={{color: "red"}}>
          <div className="font-bold text-sm text-start w-full ">
            Ranidi Lochana
          </div>
          <div className="flex ">
            <Star className="fill-amber-500 stroke-none " size={16}/>
            <Star className="fill-amber-500 stroke-none " size={16}/>
            <Star className="fill-amber-500 stroke-none " size={16}/>
            <Star className="fill-amber-500 stroke-none " size={16}/>
            <Star className="fill-amber-500 stroke-none " size={16}/>
          </div>
        </div>
      </div>

      <div className="text-xs text-justify text-slate-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet
        nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum
        modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque
        dolores!
      </div>
    </div>
  );
};

export default ReviewCard;
