/* eslint-disable react/no-unescaped-entities */
import React from "react";

import ReviewCard from "./reviewCard";

const Reviews = () => {
  return (
    <div className="w-full flex flex-col my-16 px-28 gap-8">
      <div className="flex self-center text-center text-5xl font-semibold gap-4">
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
    </div>
  );
};

export default Reviews;
