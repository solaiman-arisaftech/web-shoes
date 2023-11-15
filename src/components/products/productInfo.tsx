import React from "react";

const ProductInfo = () => {
  return (
    <section
      className="flex flex-col  bg-white  py-16 px-4 md:px-16 lg:px-32 xl:px-64"
      id="pInfo"
    >
      <div className="text-center bg-slate-500 py-1 text-white">
        Product Information
      </div>
      <div className="bg-slate-300 p-4">
        <div>
          The body shoe is design to support the natural movement of your body
        </div>
        <div>
          Removable Bounce ECO<sup>TM</sup> Footbed
        </div>

        <div>
          {" "}
          <span className="font-bold">Product Code:</span> 8BN321AF2IF0NYA
        </div>
        <div>
          <span className="font-bold">Product Type:</span> Joggers
        </div>

        <div>
          <span className="font-bold">Length:</span> 13.2 inches
        </div>
        <div>
          <span className="font-bold">Height:</span> 10.1 inches
        </div>
        <div>
          <span className="font-bold">Depth: </span>5.2 inches
        </div>
        <div>
          <span className="font-bold">Composition:</span> 100% calf leather
        </div>
        <div>
          <span className="font-bold">Inside:</span> 100% lamb leather
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
