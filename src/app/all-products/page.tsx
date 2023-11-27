/* eslint-disable react/jsx-key */

import React from "react";
import Link from "next/link";
import ProductCard from './../../components/products/productCard';
import Products from "@/components/products/products";
import PaginationCard from "@/components/pagination/paginations";

const AllProducts = () => {
   
    

  return (
    <div className="bg-white">

      <Products/>
      <div className="flex justify-center ">
        <PaginationCard/>
      </div>
    </div>
  );
};

export default AllProducts;
