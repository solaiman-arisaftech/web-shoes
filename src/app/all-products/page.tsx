/* eslint-disable react/jsx-key */

import React from "react";
import Link from "next/link";
import ProductCard from './../../components/products/productCard';
import Products from "@/components/products/products";
const AllProducts = () => {
   
    

  return (
    <div>
    
      <Products/>

      {/* <div className=" justify-evenly self-center w-full gap-6 ">
      <Slider {...settings} className=" ">
          {productData.map((product: any) => (
            <ProductCard key={product.tittle} product={product} />
          ))}
        </Slider>
        <SimpleSlider/>
      </div> */}
    </div>
  );
};

export default AllProducts;
