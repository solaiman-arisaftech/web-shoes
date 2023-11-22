"use client";
import React, { useState , useEffect} from "react";
import img1 from "../../../public/resources/shoes1.png";
import Image from "next/image";
import { describe } from "node:test";
import CartDetails from "./cartDetails";
import Link from "next/link";

const CartList = ({toggleCart, setIsCartOpen}: any) => {
  const [cartData, setCartData] = useState<any[]>([])

  useEffect(() => {
    try{
      console.log("data ", localStorage.getItem("productData"))
    } catch(e) {
    console.log(e)
    }
    
  })
  // @ts-ignore
  const productData= localStorage.getItem("productData") !== null ? JSON.parse(localStorage.getItem("productData")) : []



  const [score, setScore] = useState(0);
  const increaseScore = () => {
    setScore(score + 1);
  };
  return (
    <div className=" bg-slate-100 w-full md:w-auto absolute mt-14 flex flex-col items-center shadow-md shadow-slate-300 border-purple z-40">
      <div className="bg-gradient-to-r from-NeonPink to-purple text-white text-lg font-bold w-full justify-center text-center py-1">
        Selected item list
      </div>
      <div className="bg-slate-300 w-full">
        {productData?.map((product: any) => (
          <CartDetails key={product.id} product={product} />
        ))}
      </div>
      {/* <div>
        <div>Total item = {score}</div>
        <button onClick={increaseScore}>increase score</button>
      </div> */}

      <div className="flex w-full justify-between  ">
        
          <div className="bg-gradient-to-r from-NeonPink to-purple text-white w-1/2 text-center text-lg py-1">
          <Link href="/checkout" onClick={toggleCart} > Checkout</Link>
          </div>
        
        <div className="bg-gradient-to-r from-NeonPink to-purple text-white w-1/2 text-center text-lg py-1">
          $1024.99{" "}
        </div>
      </div>
    </div>
  );
};

export default CartList;
