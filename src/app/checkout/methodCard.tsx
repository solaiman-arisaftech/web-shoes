"use client";
import React, { useState } from "react";
import img1 from "../../../public/resources/delivery1.jpg";
import Image from "next/image";
import { methodData } from "../lib/data";
const MethodCard = (method: any) => {
  console.log(method.method.company);

  return (
    
    <label htmlFor={method.method.id} className=" bg-white  flex  justify-between items-center p-2 border-1 border-slate-200 rounded-lg  cursor-pointer">
      <label htmlFor={method.method.id} className="flex gap-4">
        <div className="">
          <Image className="object-cover" src={img1} alt="" width={50} />
        </div>
        <div className="flex flex-col ">
          <div className="text-start">hello {method.method.company}</div>
          <div className="text-xs">Delivery: {method.delivery}</div>
        </div>
      </label>
      <input  type="radio" className="cursor-pointer" id={method.method.id} />
     
    </label>
    
  );
};

export default MethodCard;
