import React from "react";
import Slider from "react-slick";
import ProductCard from "./productCard";
import SimpleSlider from "./test";


// const SampleNextArrow: React.FC<any> = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// };

// const SamplePrevArrow: React.FC<any> = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// };

const RelatedProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="">
      <SimpleSlider/>
    </div>
  );
};

export default RelatedProduct;
