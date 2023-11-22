'use client'
/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import ProductCard from "./productCard";
import Link from "next/link";
// import Slider from "react-slick";
import SimpleSlider from "./test";
import PaginationCard from "../pagination/paginations";

const Products = () => {
  const productData = [
    {id:1, tittle: "NIKE", desc: "description 1", price: "100.99" },
    {id:2, tittle: "NIKE", desc: "description 2", price: "200.99" },
    {id:3, tittle: "NIKE", desc: "description 3", price: "300.99" },
    {id:4, tittle: "NIKE", desc: "description 4", price: "400.99" },
    {id:5, tittle: "NIKE", desc: "description 5", price: "500.99" },
    {id:6, tittle: "NIKE", desc: "description 6", price: "600.99" },
    {id:7, tittle: "NIKE", desc: "description 7", price: "700.99" },
    {id:8, tittle: "NIKE", desc: "description 8", price: "800.99" },
    {id:9, tittle: "NIKE", desc: "description 9", price: "900.99" },
    {id:10, tittle: "NIKE", desc: "description 10", price: "1000.99" },
  ];

useEffect(() => {
  const jsonArray = JSON.stringify(productData)
  try{
    localStorage.setItem('productData', jsonArray)
    console.log("Type of ", productData)
    console.log("data ", localStorage.getItem("productData"))
  } catch(e) {
  console.log(e)
  }
  
})

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
