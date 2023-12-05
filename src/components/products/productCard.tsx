"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState, useContext, useRef } from "react";
import img1 from "../../../public/resources/shoes3.png";
import { Heart, Forward, Star } from "lucide-react";
import { MyContext } from "@/app/context/myContext";
import Link from "next/link";
import { dataType } from "@/app/lib/dataType";
import { productData } from "@/app/lib/data";

const ProductCard = (productData: dataType, idIndexObject: any) => {
  const { wishColor, addToCart, addToWish } = useContext(MyContext);

  // const quantityToAdd: number = 1;
  const handleCart = () => {
    const formData = {
      id: productData.id,
      title: productData.title,
      price: productData.price,
    };
    addToCart(formData);
  };
  const handleWish = () => {
    const formData = {
      id: productData.id,
      title: productData.title,
      price: productData.price,
      color: 1,
    };
    addToWish(formData);
  };
  // @ts-ignore
  const wishItem = JSON.parse(localStorage.getItem("wishItems")) || []
  

  return (
    <div className="group w-full  md:w-[96%] my-3 border-2 flex flex-col items-center rounded-lg shadow-purple shadow-md bg-white py-5 ">
      <div className="flex flex-col absolute self-start mx-4 mt-4 gap-2  -translate-x-4 invisible group-hover:visible group-hover:translate-x-1 duration-75 delay-75">
        <Heart
        onClick={handleWish}
          className={`border-2 p-2 rounded-md cursor-pointer ${
            wishItem.map((wish:any)=>{wish.id === productData.id ? "border-red-500 fill-red-500 stroke-red-500" : " "})
           
          }
         `}
          width={45}
          height={45}
          
        />
        {/* {wishItem.map((m: any) => (
          <>
            {m.id === productData.id ? <Heart /> : <></>}
          </>
        ) )} */}
        {/* <Heart /> */}

        {/* {wishItem.map((m: any) => (
          <div key={m.id} className={`border-2 p-2 rounded-md cursor-pointer ${m.id === productData.id ? <Heart className="border-red-500"/> : <Heart/>}`}>

          </div>
        ))} */}

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
            pathname: `/${productData.id}`,
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
        <div className="text-center text-3xl font-bold">
          {productData.title}
        </div>
        <div className="text-center text-slate-500">{productData.desc}</div>
        <div className="text-center font-bold text-lg">
          ${productData.price}
        </div>
        <div className="flex self-center ">
          <Star className="fill-amber-500 stroke-none " size={20} />
          <Star className="fill-amber-500 stroke-none " size={20} />
          <Star className="fill-amber-500 stroke-none " size={20} />
          <Star className="fill-amber-500 stroke-none " size={20} />
          <Star className="fill-amber-500 stroke-none " size={20} />
        </div>
        <Link
          className=" flex justify-center"
          href={{
            pathname: `/${productData.id}`,
            query: { slug: "my-post" },
          }}
        >
          <div
            className="w-1/2 rounded self-center text-center text-white p-2 bg-gradient-to-r from-NeonPink to-purple hover:-translate-y-1 hover:scale-110 duration-200"
            // onClick={handleCart}
          >
            More Details
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
