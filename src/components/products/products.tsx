/* eslint-disable react/jsx-key */
import React from "react";
import ProductCard from "./productCard";
import Link from "next/link";

const Products = () => {
  const productData = [
    { tittle: "NIKE1", desc: "description 1", price: "100.99" },
    { tittle: "NIKE2", desc: "description 2", price: "200.99" },
    { tittle: "NIKE3", desc: "description 3", price: "300.99" },
    { tittle: "NIKE4", desc: "description 4", price: "400.99" },
    { tittle: "NIKE5", desc: "description 5", price: "500.99" },
    { tittle: "NIKE6", desc: "description 6", price: "600.99" },
    { tittle: "NIKE7", desc: "description 7", price: "700.99" },
    { tittle: "NIKE8", desc: "description 8", price: "800.99" },
    { tittle: "NIKE9", desc: "description 9", price: "900.99" },
    { tittle: "NIKE10", desc: "description 10", price: "1000.99" },
  ];

  return (
    <section
      className="w-full flex flex-col py-36 px-4 md:px-16 lg:px-32 xl:px-64 gap-8 "
      id="products"
    >
      <div className="flex self-center text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple pb-10">
        PRODUCTS
      </div>
      <div className=" justify-evenly self-center w-full gap-6 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {productData.map((product: any) => (
          <Link href="/product-deatils">
            <ProductCard key={product.tittle} product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
