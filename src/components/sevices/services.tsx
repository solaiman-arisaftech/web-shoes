/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Truck, RotateCcw, Headphones } from "lucide-react";

const Services = () => {
  return (
    <div className="w-full flex flex-col  px-72 py-36 gap-8">
      <div className="flex self-center text-center text-5xl font-semibold gap-4 py-10">
        <span>OUR</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple">
          SERVICES
        </span>
      </div>
      <div className="flex justify-center  self-center w-full gap-4 px-32">
        <div className="flex flex-col items-center text-center p-4">
          <div className="flex text-center self-center items-center">
            <Truck className="stroke-yellow-400 " size={50} />
          </div>
          <div className="font-bold text-base text-center">Fast Delivery</div>
          <div className="text-sm text-slate-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="flex flex-col items-center text-center p-4">
        <div className="flex text-center self-center items-center">
            <RotateCcw className="stroke-yellow-400 " size={50} />
          </div>
          <div className="font-bold text-base text-center">
            10 Days Replacement
          </div>
          <div className="text-sm text-slate-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="flex flex-col items-center text-center p-4">
        <div className="flex text-center self-center items-center">
            <Headphones className="stroke-yellow-400 " size={50} />
          </div>
          <div className="font-bold text-base text-center">24 x 7 Support</div>
          <div className="text-sm text-slate-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
