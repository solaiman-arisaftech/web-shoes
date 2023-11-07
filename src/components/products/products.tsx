import React from "react";
import ProductCard from "./productCard";

const Products = () => {
  return (
    <section className="w-full flex flex-col py-36 px-64 gap-8 " id="products">
      
      <div className="flex self-center text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple pb-10">
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
    </section>
  );
};

export default Products;
