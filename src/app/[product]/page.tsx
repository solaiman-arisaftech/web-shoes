"use client";
import React from "react";
import { productData } from "@/app/lib/data";
import ProductDetails from "@/components/products/productDetails";
import ProductInfo from "@/components/products/productInfo";
import ReviewCard from "@/components/customer-reviews/reviewCard";
import SimpleSlider from "@/components/products/test";
import { useSearchParams } from "next/navigation";
const PageDetails = ({ params }: any) => {
  console.log("params", params.product, params);
  const router = useSearchParams();
  console.log("query", router);

  // console.log(productData);

  const productDetail = productData.find((item) => item.id == params.product);
  console.log(productDetail);

  return (
    <>
      <div className="bg-white ">
        <ProductDetails productDetail={productDetail} />
        <ProductInfo />
        <div
          className="flex flex-col gap-4 pb-16 px-4 md:px-16 lg:px-32 xl:px-64 "
          id="pReview"
        >
          <div className="text-center bg-violet-600 py-1 text-white ">
            Product Reviews
          </div>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className="px-4 md:px-16 lg:px-32 xl:px-64">
          <div className="text-center bg-violet-600 py-1 text-white ">
            Related Products
          </div>
          {/* <RelatedProduct /> */}
          <div className="pb-20 " id="relatedProduct">
            <SimpleSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageDetails;
