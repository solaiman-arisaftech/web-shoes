"use client";
import React, { useState } from "react";
import img1 from "../../../public/resources/delivery1.jpg";
import Image from "next/image";
import { XCircle } from "lucide-react";
const MethodCard = () => {
  return (
    <div className=" bg-white  flex  justify-between items-center p-2 border-1 border-slate-200 rounded-lg  cursor-pointer">
      <div className="flex gap-4">
        <div className="">
          <Image className="object-cover" src={img1} alt="" width={50} />
        </div>
        <div className="flex flex-col">
          <div className="text-start">Fedex Delivery</div>
          <div className="text-xs">Delivery: 2-4days</div>
        </div>
      </div>
      <div>select</div>
    </div>
  );
};

export default MethodCard;
