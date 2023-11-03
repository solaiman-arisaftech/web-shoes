import React from "react";
import ProductCard from "./productCard";

const Products = () => {
  return (
    <div className="w-full flex flex-col my-16 px-64 gap-8">
      <div className="flex self-center text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple py-10">
        PRODUCTS
      </div>
      <div className="flex justify-evenly self-center w-full gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex justify-evenly self-center w-full gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
