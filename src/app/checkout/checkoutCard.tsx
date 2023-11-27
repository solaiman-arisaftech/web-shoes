"use client";
import React, { useState } from "react";
import img1 from "../../../public/resources/shoes1.png";
import Image from "next/image";
import { XCircle } from "lucide-react";
import { dataType } from "../lib/dataType";
const CheckoutCard = (product:dataType) => {

  return (
    <div className=" bg-white flex items-center ">
      <div className="w-24 items-center flex justify-center">
        <Image className="object-cover self-center" src={img1} alt="" width={50} />
      </div>
      <div className="flex flex-col w-full ">
        <div className="text-start font-bold text-NeonPink ">{product.tittle}</div>
        <div className="text-xs">
          {product.desc}
        </div>

        <div className="text-sm font-bold text-purple ">${product.price}</div>
      </div>
    </div>
  );
};

export default CheckoutCard;
