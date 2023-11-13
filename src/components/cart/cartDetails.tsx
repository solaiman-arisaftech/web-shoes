import React from "react";
import img1 from "../../../public/resources/shoes1.png";
import Image from "next/image";
import { describe } from "node:test";
const CartDetails = ({ product, idIndexObject }: any) => {
  return (
    <div className=" bg-white  flex justify-between items-center  p-4 gap-4 border-b-1 ">
      
        <div><Image src={img1} alt="" width={30} /></div>
        <h4 className="text-start">{product.tittle}</h4>
        <div className="">
          <p>{product.desc}</p>
        </div>
        <div className="">${product.price}</div>
        <div className=" bg-red-600 py-1 px-2 text-white text-sm self-center rounded shadow-lg">
          Remove
        </div>
      
    </div>
  );
};

export default CartDetails;
