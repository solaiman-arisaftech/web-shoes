/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import Link from "next/link";
import ProductCard from "../components/products/productCard";
import Products from "@/app/components/products/products";
import PaginationCard from "@/app/components/pagination/paginations";
// import { useRouter } from "next/router";
import { useRouter } from 'next/navigation';
import { Router } from "lucide-react";
import CustomPaginations from "@/app/components/pagination/paginations";

const AllProducts = () => {
  const router = useRouter();
  console.log("router ", router)

  return (
    <div className="bg-white w-full flex flex-col py-16 px-4 md:px-16 lg:px-32 xl:px-64">
      {/* <Products /> */}
      <div className="flex justify-center ">
        {/* {router.query.id} */}
        {/* <PaginationCard page_name={"all-products"} /> */}
        <CustomPaginations/>
      </div>
    </div>
  );
};

export default AllProducts;
