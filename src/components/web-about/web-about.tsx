import React from "react";
// import ProductCard from "./productCard";

const About = () => {
  return (
    <div className="w-full flex flex-col my-16 px-28 gap-8">
      <div className="flex self-center text-center text-5xl font-semibold gap-4">
        <span>WEB</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple">
          ABOUT
        </span>
      </div>
      <div className="flex justify-evenly self-center w-full gap-6"></div>
      <div className="flex justify-evenly self-center w-full gap-6"></div>
    </div>
  );
};

export default About;
