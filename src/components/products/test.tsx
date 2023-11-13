"use client"
import React, { Component } from "react";
import ProductCard from "./productCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SimpleSlider: React.FC = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
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
      <div>
        <h2>Single Item</h2>
        <Slider {...settings}>
        {productData.map((product: any) => (
            <ProductCard key={product.tittle} product={product} />
          ))}
        </Slider>
      </div>
    );
  };
  
  export default SimpleSlider;