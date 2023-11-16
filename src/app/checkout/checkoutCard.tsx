"use client";
import React, { useState } from "react";
import img1 from "../../../public/resources/shoes1.png";
import Image from "next/image";
import { XCircle } from "lucide-react";
const CheckoutCard = ({ product, idIndexObject }: any) => {
  return (
    <div className=" bg-white  flex  items-center  p-4 gap-4  ">
      <div className="w-1/3 ">
        <Image className="object-cover" src={img1} alt="" width={50} />
      </div>
      <div className="flex flex-col w-2/3">
        <h4 className="text-start">Nike</h4>
        <div className="">
          description
        </div>

        <div className=" ">$100.99</div>
      </div>
    </div>
  );
};

export default CheckoutCard;
