import React from "react";
import Image from "next/image";

import img1 from "../../../public/resources/shoes5.png";

const ProductCard = () => {
  return (
    <div className="w-full p-4 border-2 flex flex-col items-center ">
      <div className="w-1/2 p-4">
        <Image src={img1} alt=""/>
      </div>
      <div className="w-1/2 flex flex-col">
        <div>NIKE</div>
        <div className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit</div>\
        <div>$100.99</div>
        <div>
         
        </div>
        <div>Add to cart</div>
      </div>
    </div>
  );
};

export default ProductCard;
