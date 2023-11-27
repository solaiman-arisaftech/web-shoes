"use client";
/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import ProductCard from "./productCard";
import Link from "next/link";
import { productData } from "@/app/lib/data";
import { type } from "os";
import { dataType } from "@/app/lib/dataType";

const Products = () => {
 
    // const alldata = localStorage.setItem('productData', JSON.stringify(productData)) 
    // console.log(localStorage.setItem('productData', JSON.stringify(productData)) )
    // console.log(localStorage.getItem('productData'))
  
  return (
    <section
      className="w-full flex flex-col py-16 px-4 md:px-16 lg:px-32 xl:px-64 gap-8 bg-white"
      id="products"
    >
      <div className="flex self-center text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple pb-10">
        PRODUCTS
      </div>
      <div className=" justify-evenly self-center w-full gap-6 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {productData.map((product:dataType) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
