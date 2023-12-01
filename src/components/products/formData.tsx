/* eslint-disable react/no-unescaped-entities */
// "use client";
// import React, { useState, useEffect, useContext } from "react";
// import { useRouter } from "next/router";
// import red_img1 from "../../../public/resources/red_shoes1.png";
// import red_img2 from "../../../public/resources/red_shoes2.png";
// import red_img3 from "../../../public/resources/red_shoes3.png";
// import red_img4 from "../../../public/resources/red_shoes4.png";
// // import { Rating } from "flowbite-react";
// import { Heart, Forward, Star } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { productData } from "@/app/lib/data";
// import { dataType } from "@/app/lib/dataType";
// import { MyContext } from "@/app/context/myContext";
// import { useSearchParams } from "next/navigation";

// const FormData = ({
//   productDetail,
//   id,
//   title,
//   desc,
//   price,
//   sizes,
// }: any) => {
//   console.log(productDetail);
//   const {
//     quantityCount,
//     setQuantityCount,
//     quantityToAdd,
//     decrease,
//     increase,
//     addToCart,
//     addToWish,
//   } = useContext(MyContext);
//   const [selectedDiv, setSelectedDiv] = useState(null);
//   const [stock, setStock] = useState(true);
//   const selectDiv = (id: any) => {
//     setSelectedDiv(id);
//   };

//   const [srcc, setSrcc] = useState<any>(red_img1);

//   const handleInputChange = (e: any) => {
//     const value = parseInt(e.target.value, 10);
//     setQuantityCount(isNaN(value) ? 0 : value);
//   };

//   // useEffect(() => {
//   //   console.log(setStock);
//   // }, [stock]);
 
//   const [formData, SetFormData]=useState({
//     id:'',
//     name: '',
//     qty: 0,
//     size: '',
//   })
 
//   const handleCart = () => {

//     addToCart(productDetail)

//   };
//  const handleOnChange=()=>{
//   const productDetailSubmit = {
//     id: productDetail.id,
//     name: productDetail.title,
//     qty: 1,
//     size: productDetail.sizes.size,
//     // price: "take from product detils/ pc",
//     // discount: "take from product detils if exists",
//     // subtotal: qty*price
//   }
// //   SetFormData({productDetailSubmit})
//  }
//   const handleWish = () => {
//     addToWish(productDetail);
//   };

//   return (
//     <div className="flex flex-col  bg-white gap-10 py-28 px-8 md:px-16 lg:px-32 xl:px-64">
//       <div className="flex self-center text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple pb-5 ">
//         Product Details
//       </div>
//       <form className="w-full flex flex-col md:flex-row justify-center gap-20 ">
//         <div className=" flex  flex-col w-full  gap-4">
//           <div className="text-base text-bold text-white bg-NeonPink rounded-2xl self-start items-center flex justify-center w-28 py-1">
//             New Arrival
//           </div>
//           <div className="text-3xl text-bold">{productDetail.title}</div>
        
//           <div className="text-3xl text-bold"> {productDetail.price}</div>
//           <div>
//             <div className="font-bold">Description</div>
//             <div>{productDetail.desc}</div>
//           </div>
          
//           <div className="flex gap-4 items-center">
//             <div className="flex flex-row h-8 rounded-lg">
//               <button
//                 onClick={decrease}
//                 className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400  w-10 rounded-l cursor-pointer outline-none"
//               >
//                 <span className="m-auto font-bold p-2 ">−</span>
//               </button>
//               <input
//                 className="outline-none focus:outline-none text-center text-sm w-16 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 "
//                 value={quantityCount}
//                 onChange={handleInputChange}
//               ></input>
//               <button
//                 onClick={increase}
//                 className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
//               >
//                 <span className="m-auto  font-bold p-2">+</span>
//               </button>
//             </div>

//             <div className="flex ">
//               <Heart
//                 className="stroke-NeonPink fill-none hover:fill-NeonPink border-2 hover:border-NeonPink p-1 rounded-md cursor-pointer"
//                 width={30}
//                 height={32}
//                 onClick={handleWish}
//               />
//             </div>
//           </div>
//           <div>
//             <div className="font-bold">Available Size</div>
//             <div className="flex gap-2">
//               {productDetail.sizes.map((data: any) => (
//                 <div
//                   key={data}
//                   className={`cursor-pointer border-1 p-1 text-xs px-2 rounded ${
//                     selectedDiv === data.size
//                       ? "bg-NeonPink text-white"
//                       : "bg-gray-200"
//                   }`}
//                   onClick={() => {
//                     selectDiv(data.size);

//                     if (data.stock <= 0) {
//                       setStock(false);
//                     } else {
//                       setStock(true);
//                     }
//                     console.log("stock ", stock, " data size ", data.stock);
//                   }}
//                 >
//                   {data.size}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div
//             className={`text-center font-bold rounded-2xl border-2 border-NeonPink py-1  ${
//               stock
//                 ? "hover:bg-NeonPink text-NeonPink  hover:text-white  cursor-pointer"
//                 : "bg-slate-300 border-slate-300 text-white border-2 cursor-not-allowed "
//             } `}
//             // onClick={handleCart}
//             onClick={() => {
//               if (stock === true) {
//                 handleCart();
//               }
//             }}
//           >
//             Add to Cart
//           </div>
//           <div className="bg-NeonPink text-white font-bold text-center rounded-2xl py-1 cursor-pointer">
//             Buy Now
//           </div>
//         </div>
//       </form>
//       </div>
//   );
// };

// export default FormData;

import { useState } from 'react';

const MyForm: React.FC = (productDetail) => {
    const [formData, setFormData] = useState({
        title: '',
        id: '',
        price: '',
        quantity: '',
        size: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        // Retrieve existing form data from local storage
        const existingFormData = JSON.parse(localStorage.getItem('formData') || '[]');
    
        // Add new form data to the array
        const newFormData = [...existingFormData, formData];
    
        // Save the updated array to local storage
        localStorage.setItem('formData', JSON.stringify(newFormData));
    
        // Clear the form
        setFormData({
          title: '',
          id: '',
          price: '',
          quantity: '',
          size: '',
        });
      };
    

  return (
    <form onSubmit={handleSubmit} className='py-28 px-8 md:px-16 lg:px-32 xl:px-64'>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <br />
      <label>
        ID:
        <input type="text" name="id" value={formData.id} onChange={handleChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="text" name="price" value={formData.price} onChange={handleChange} />
      </label>
      <br />
      <label>
        Quantity:
        <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} />
      </label>
      <br />
      <label>
        Size:
        <input type="text" name="size" value={formData.size} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;