/* eslint-disable react/no-unescaped-entities */
import React from "react";

import ReviewCard from "./reviewCard";

const Reviews = () => {
  return (
    <section className="w-full flex flex-col md:py-36 px-64 gap-8 " id="reviews">
      <div className="flex flex-col md:flex-row self-center text-black text-center text-5xl font-semibold gap-4 py-10">
        <span>CUSTOMER'S</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple">
          REVIEW
        </span>
      </div>
      <div className="flex justify-evenly self-center w-full gap-6">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div className="flex justify-evenly self-center w-full gap-6">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
};

export default Reviews;
