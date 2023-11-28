/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import red_img1 from "../../../public/resources/red_shoes1.png";
import red_img2 from "../../../public/resources/red_shoes2.png";
import red_img3 from "../../../public/resources/red_shoes3.png";
import red_img4 from "../../../public/resources/red_shoes4.png";
// import { Rating } from "flowbite-react";
import { Heart, Forward, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { productData } from "@/app/lib/data";
import { dataType } from "@/app/lib/dataType";
import { MyContext } from "@/app/context/myContext";
import { useSearchParams } from "next/navigation";

const ProductDetails = ({ id, title, desc, price, sizes, params }: any) => {
  const {
    countCartItems,
    setCountCartItems,
    countWish,
    setWishCount,
    disable,
    setDisable,
    addToCart
  } = useContext(MyContext);
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [stock, setStock] = useState(true);
  const selectDiv = (id: any) => {
    setSelectedDiv(id);
  };

  const [count, setCount] = useState(0);

  const [srcc, setSrcc] = useState<any>(red_img1);
  const decrease = () => {
    if (count == 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(setStock);
  }, [stock]);

  // const handleCart = () => {
  //   addToCart(product)
  //     productData.map((product:any)=>{
  //       if(product.id===id){
  //        return {...product}
          
  //       }
  //     })
  //   });
  //   setCountCartItems(countCartItems + 1);

  // };



  return (
    <div className="flex flex-col  bg-white gap-10 py-28 px-8 md:px-16 lg:px-32 xl:px-64">
      <div className="flex self-center text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple pb-5 ">
        Product Details
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center gap-20 ">
        <div className="flex w-full gap-4 ">
          <div className="flex flex-col gap-4 p-2 w-1/5 md:w-1/6 h-48 ">
            <div
              className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2  hover:duration-300 opacity-80 hover:opacity-100 cursor-pointer"
              onClick={() => setSrcc(red_img1)}
            >
              <Image src={red_img1} alt="" width={200} height={200} />
            </div>
            <div
              className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2 hover:duration-300  opacity-80 hover:opacity-100 cursor-pointer"
              onClick={() => setSrcc(red_img2)}
            >
              <Image src={red_img2} alt="" width={200} />
            </div>
            <div
              className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2 hover:duration-300  opacity-80 hover:opacity-100 cursor-pointer"
              onClick={() => setSrcc(red_img3)}
            >
              <Image src={red_img3} alt="" width={200} />
            </div>
            <div
              className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2 hover:duration-300  opacity-80 hover:opacity-100 cursor-pointer"
              onClick={() => setSrcc(red_img4)}
            >
              <Image src={red_img4} alt="" width={200} />
            </div>
          </div>
          <div className=" border-NeonPink shadow-md shadow-NeonPink  rounded-xl border-2 p-2 w-full flex items-center justify-center  ">
            <Image
              className="object-fit "
              src={srcc}
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className=" flex  flex-col w-full  gap-4">
          <div className="text-base text-bold text-white bg-NeonPink rounded-2xl self-start items-center flex justify-center w-28 py-1">
            New Arrival
          </div>
          <div className="text-3xl text-bold">{title}</div>

          <div className="flex ">
            <Star className="fill-amber-500 stroke-none " size={20} />
            <Star className="fill-amber-500 stroke-none " size={20} />
            <Star className="fill-amber-500 stroke-none " size={20} />
            <Star className="fill-amber-500 stroke-none " size={20} />
            <Star className="fill-amber-500 stroke-none " size={20} />
          </div>

          <div className="text-3xl text-bold"> {price}</div>
          <div>
            <div className="font-bold">Description</div>
            <div>{desc}</div>
          </div>
          <div className="flex flex-col gap-2">
            <div
              className={`w-24 flex justify-center rounded-xl  ${
                stock ? "bg-green-400 text-white " : "bg-red-400 text-white "
              }`}
            >
              {stock ? "In stock" : "Out of stock"}
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="text-red-500 ">Ships from china. </div>
              <div> Most customers receive within 3-31 days.</div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-row h-8 w-28 rounded-lg relative bg-transparent">
              <button
                onClick={decrease}
                className=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300  w-10 rounded-l cursor-pointer outline-none"
              >
                <span className="m-auto text-2xl font-thin">−</span>
              </button>
              <input
                type="text"
                className="flex items-center text-center w-16 bg-gray-100 font-semibold text-md hover:text-black focus:outline-none focus:ring-none border-none md:text-base cursor-text  "
                value={count}
              ></input>
              <button
                onClick={increase}
                className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-10 rounded-r cursor-pointer"
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>

            <div className=" ">
              <Heart
                className="stroke-NeonPink fill-none hover:fill-NeonPink border-2 hover:border-NeonPink p-1 rounded-md cursor-pointer"
                width={30}
                height={32}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Available Size</div>
            <div className="flex gap-2">
              {sizes.map((data: any) => (
                <div
                  key={data}
                  className={`cursor-pointer border-1 p-1 text-xs px-2 rounded ${
                    selectedDiv === data.size
                      ? "bg-NeonPink text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => {
                    selectDiv(data.size);

                    if (data.stock <= 0) {
                      setStock(false);
                    } else {
                      setStock(true);
                    }
                    console.log("stock ", stock, " data size ", data.stock);
                  }}
                >
                  {data.size}
                </div>
              ))}
            </div>
          </div>
          <div
            className={`text-center font-bold rounded-2xl border-2 border-NeonPink py-1  ${
              stock
                ? "hover:bg-NeonPink text-NeonPink  hover:text-white  cursor-pointer"
                : "bg-slate-300 border-slate-300 text-white border-2 cursor-not-allowed "
            } `}
            // onClick={handleCart}
            // onClick={handleCart}
          >
            Add to Cart
          </div>
          <div className="bg-NeonPink text-white font-bold text-center rounded-2xl py-1 cursor-pointer">
            Buy Now
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center self-center ">
        <Link href="#pInfo">
          <div className="p-4 border-1 border-NeonPink cursor-pointer hover:text-white hover:bg-purple hover:border-none font-bold shadow-xl rounded">
            describtion
          </div>
        </Link>
        <Link href="#pReview">
          <div className="p-4 border-1 border-NeonPink cursor-pointer hover:text-white hover:bg-purple hover:border-none font-bold shadow-xl rounded">
            Reviews
          </div>
        </Link>
        <Link href="#relatedProduct">
          <div className="p-4 border-1 border-NeonPink cursor-pointer hover:text-white hover:bg-purple hover:border-none font-bold shadow-xl rounded">
            Related Products
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
