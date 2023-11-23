"use client";
/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import ProductCard from "./productCard";
import Link from "next/link";
// import Slider from "react-slick";
import SimpleSlider from "./test";
import PaginationCard from "../pagination/paginations";

import { productData } from "@/app/lib/data";
const Products = () => {
  useEffect(() => {
    const jsonArray = JSON.stringify(productData);
    try {
      localStorage.setItem("productData", jsonArray);
      console.log("Type of ", productData);
      console.log("data ", localStorage.getItem("productData"));
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <section
      className="w-full flex flex-col py-16 px-4 md:px-16 lg:px-32 xl:px-64 gap-8 bg-white"
      id="products"
    >
      <div className="flex self-center text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple pb-10">
        PRODUCTS
      </div>
      <div className=" justify-evenly self-center w-full gap-6 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {productData.map((product: any) => (
          // <Link href="/product-deatils">
          <ProductCard key={product.id} product={product} />

          // </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
