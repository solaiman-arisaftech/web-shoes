"use client";
import React, { useState } from "react";
import img1 from "../../../public/resources/shoes1.png";
import Image from "next/image";
import { XCircle } from "lucide-react";
import { dataType } from "../lib/dataType";
const CheckoutCard = (product: any) => {
  return (
    <div className=" bg-white flex items-center gap-10 ">
      <div className="w-24 items-center flex justify-center">
        <Image
          className="object-cover self-center"
          src={img1}
          alt=""
          width={50}
        />
      </div>
      <div className="flex flex-col w-full gap-1">
        <div className="text-start font-bold text-NeonPink ">
          {product.title}
        </div>
        <div className="text-sm ">Price: ${product.price}</div>
        <div className="text-sm  ">Size : {product.size}</div>
        <div className="text-sm  ">Quantity : {product.qty}</div>
      </div>
    </div>
  );
};

export default CheckoutCard;
