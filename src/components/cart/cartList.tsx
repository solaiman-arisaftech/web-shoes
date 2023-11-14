import React from "react";
import img1 from "../../../public/resources/shoes1.png";
import Image from "next/image";
import { describe } from "node:test";
import CartDetails from "./cartDetails";

const CartList = () => {
    const productData = [
        { tittle: "NIKE1", desc: "description 1", price: "100.99" },
        { tittle: "NIKE2", desc: "description 2", price: "200.99" },
        { tittle: "NIKE3", desc: "description 3", price: "300.99" },
        { tittle: "NIKE4", desc: "description 4", price: "400.99" },
        { tittle: "NIKE5", desc: "description 5", price: "500.99" },
        { tittle: "NIKE6", desc: "description 6", price: "600.99" },
        { tittle: "NIKE7", desc: "description 7", price: "700.99" },
        { tittle: "NIKE8", desc: "description 8", price: "800.99" },
        { tittle: "NIKE9", desc: "description 9", price: "900.99" },
        { tittle: "NIKE10", desc: "description 10", price: "1000.99" },
      ];
  return (
    <div className=" bg-slate-100 w-full md:w-auto absolute mt-14 flex flex-col items-center shadow-md shadow-slate-300 border-purple">
      <div className="bg-gradient-to-r from-NeonPink to-purple text-white text-lg font-bold w-full justify-center text-center py-1">Selected item list</div>
      <div className="bg-slate-300 w-full">
      {productData.map((product:any)=>(
          <CartDetails key={product.tittle } product={product}  />
        ))}
        
      </div>
      <div className="flex w-full justify-between  ">
        <div className="bg-gradient-to-r from-NeonPink to-purple text-white w-1/2 text-center text-lg py-1">place order</div>
        <div className="bg-gradient-to-r from-NeonPink to-purple text-white w-1/2 text-center text-lg py-1">$1024.99 </div>
      </div>
    </div>
  );
};

export default CartList;
