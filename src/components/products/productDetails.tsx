import React from "react";

const ProductDetails = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full">ProductDetails</div>
      <div className="w-full">
        <div className="w-1/2">image</div>
        <div className="w-1/2">
          <div>New Arival</div>
          <div>Tittle</div>
          <div>Star</div>
          <div>PRice</div>
          <div>Specification</div>
          <div>
            <div>In Stock</div>
            <div>
              <span>Ships from china.</span>{" "}
              <span>Most customers receive within 3-31 days.</span>
            </div>
          </div>
          <div>
            <div>Quantity</div>
            <div>Faviourite</div>
          </div>
          <div>ADd to Cart</div>
          <div>Buy Now</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
