import ReviewCard from "@/components/customer-reviews/reviewCard";
import ProductDetails from "@/components/products/productDetails";
import ProductInfo from "@/components/products/productInfo";
import RelatedProduct from "@/components/products/relatedProducts";
import SimpleSlider from "@/components/products/test";
import React from "react";
import CheckoutCard from "../checkout/checkoutCard";

const page = (product:any) => {
  return (
    <div className="bg-white ">
      <ProductDetails product={product} />
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
        <SimpleSlider/>
        </div>
      </div>
    </div>
  );
};

export default page;
