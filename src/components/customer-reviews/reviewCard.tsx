"use client";
import React from "react";
import Image from "next/image";
import reviewer1 from "../../../public/resources/gir_dp2.jpg";
import { Rating } from "flowbite-react";
import { Heart, Forward } from "lucide-react";

const ReviewCard = () => {
  return (
    <div className="group w-full p-4 border-2 flex flex-col items-center rounded-lg shadow-slate-500 shadow-md bg-slate-100">
      <div className="p-4 flex items-start self-start justify-start gap-4 ">
        <div className="rounded-full ...">
          <Image src={reviewer1} alt="" width={30} height={30} />
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-sm text-start w-full">
            Ranidi Lochana
          </div>
          <Rating className="self-center" size="sm">
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
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
