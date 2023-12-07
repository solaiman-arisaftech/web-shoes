"use client";
import React, { Component, useState, useEffect } from "react";
import ProductCard from "./productCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRightSquare, ChevronLeftSquare } from "lucide-react";
import { productData } from "@/app/lib/data";

const SimpleSlider: React.FC = () => {
  

  const settings = {
    className: "p-10 ",
    dots: true,
    // infinite: true,
    speed: 500,
    // centerMode: true,
    // centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <ChevronRightSquare className=" stroke-NeonPink fill-violet-600" />
    ),
    prevArrow: <ChevronLeftSquare />,
  };

  return (
    <div>
      <Slider {...settings}>
        {productData.map((product: any) => (
          <ProductCard key={product.key} {...product} />
        ))}
      </Slider>
      
    </div>
  );
};

export default SimpleSlider;
