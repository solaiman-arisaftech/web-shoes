"use client";
import React from "react";
import Image from "next/image";
import { useState, useContext, useRef } from "react";
import img1 from "../../../public/resources/shoes3.png";
import { Heart, Forward, Star } from "lucide-react";
import { MyContext } from "@/app/context/myContext";
import Link from "next/link";
import { dataType } from "@/app/lib/dataType";

const ProductCard = (product: dataType, idIndexObject: any) => {
  const { countCartItems, setCountCartItems, countWish, setWishCount, disable, setDisable } = useContext(MyContext);
  
  

  const addToCart = (product: dataType) => {
    // Get existing cart items from local storage
    const existingCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    // Add the new product to the cart
    const updatedCartItems = [...existingCartItems, product];
    // Save the updated cart items to local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    
  };

  const addToWish = (product: dataType) => {
    const existingWishItems = JSON.parse(
      localStorage.getItem("wishItems") || "[]"
    );
    const updatedWishItems = [...existingWishItems, product];
    localStorage.setItem("wishItems", JSON.stringify(updatedWishItems));
  };

  const handleCart = () => {
    addToCart(product);
    setCountCartItems(countCartItems + 1);

  };
  const handleWish = () => {
    addToWish(product);
    setWishCount(countWish + 1);
    setDisable(true)
  };

  return (
    <div className="group w-full  md:w-[96%] my-3 border-2 flex flex-col items-center rounded-lg shadow-purple shadow-md bg-white py-5 ">
      <div className="flex flex-col absolute self-start mx-4 mt-4 gap-2  -translate-x-4 invisible group-hover:visible group-hover:translate-x-1 duration-75 delay-75">
         <Heart
          className={` stroke-none fill-black hover:fill-NeonPink border-2 p-2 rounded-md cursor-pointer`}
          width={45}
          height={45}
          onClick={handleWish}
        />
       
        <Forward
          className="stroke-fill stroke-2 stroke-black hover:stroke-NeonPink border-2 p-2 rounded-md"
          width={45}
          height={45}
        />
      </div>
      <div className=" w-1/2 p-4 group-hover:translate-y-1 group-hover:scale-125 duration-300 ">
        {/* <Link href={`/${product.id}`}> */}
        <Link
          href={{
            pathname: `/${product.id}`,
            query: { slug: "my-post" },
          }}
        >
          <Image
            className="group-hover:rotate-45 group-hover:transition-300 group-hover:translate-x-5 group-hover:delay-50 transition-transform "
            src={img1}
            alt=""
          />
        </Link>
      </div>
      <div className=" flex flex-col p-4 gap-4">
        <div className="text-center text-3xl font-bold">{product.title}</div>
        <div className="text-center text-slate-500">{product.desc}</div>
        <div className="text-center font-bold text-lg">${product.price}</div>
        <div className="flex self-center ">
          <Star className="fill-amber-500 stroke-none " size={20} />
          <Star className="fill-amber-500 stroke-none " size={20} />
          <Star className="fill-amber-500 stroke-none " size={20} />
          <Star className="fill-amber-500 stroke-none " size={20} />
          <Star className="fill-amber-500 stroke-none " size={20} />
        </div>
        <button
          className="w-1/2  rounded self-center text-center text-white p-2 bg-gradient-to-r from-NeonPink to-purple hover:-translate-y-1 hover:scale-110 duration-200"
          onClick={handleCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
