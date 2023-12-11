/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useContext, useEffect } from "react";
import red_img1 from "../../../../public/resources/red_shoes1.png";
import red_img2 from "../../../../public/resources/red_shoes2.png";
import red_img3 from "../../../../public/resources/red_shoes3.png";
import red_img4 from "../../../../public/resources/red_shoes4.png";
// import { Rating } from "flowbite-react";
import { Heart, Forward, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MyContext } from "@/app/context/myContext";

type Item = {
  id: string;
  price: number;
  qty: number;
  size: number;
  title: string;
};

const ProductDetails = ({ productDetail }: any) => {
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [stock, setStock] = useState(true);
  const selectDiv = (id: any) => {
    setSelectedDiv(id);
  };
  const {
    wishColor,
    setWishColor,
    addToCart,
    addToWish,
    increase,
    decrease,
    qty,
    setQty,
  } = useContext(MyContext);
  // @ts-ignore
  // const cart: Item[] = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [srcc, setSrcc] = useState<any>(red_img1);
  const [size, setSize] = useState(39);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      id: productDetail.id,
      title: productDetail.title,
      price: productDetail.price,
      qty,
      size,
      subtotal: productDetail.price * qty,
    };
    addToCart(formData);
  };
  const handleWish = () => {
    const formData = {
      id: productDetail.id,
      title: productDetail.title,
      price: productDetail.price,
      color: setWishColor(1),
    };
    addToWish(formData);
  };

  return (
    <div className="flex flex-col  bg-white gap-10 py-28 px-8 md:px-16 lg:px-32 xl:px-64">
      <div className="flex self-center text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple pb-5 ">
        Product Details
      </div>
      <form
        className="w-full flex flex-col md:flex-row justify-center gap-20 "
        onSubmit={handleSubmit}
      >
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
          <label className="text-3xl text-bold">{productDetail.title} </label>

          <div className="flex ">
            <Star className="fill-amber-500 stroke-none " size={20} />
            <Star className="fill-amber-500 stroke-none " size={20} />
            <Star className="fill-amber-500 stroke-none " size={20} />
            <Star className="fill-amber-500 stroke-none " size={20} />
            <Star className="fill-amber-500 stroke-none " size={20} />
          </div>
          <label className="text-3xl text-bold">${productDetail.price}</label>
          <div>
            <div className="font-bold">Description</div>
            <div>{productDetail.desc}</div>
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
            <div className="flex flex-row h-8 rounded-lg ">
              <div
                onClick={decrease}
                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400  w-10 rounded-l cursor-pointer outline-none flex justify-center"
              >
                <span className=" font-bold p-1 items-center ">−</span>
              </div>
              <input
                className="outline-none focus:outline-none text-center text-sm w-16 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 "
                value={qty}
                onChange={(e) => setQty(+e.target.value)}
              ></input>
              <div
                onClick={increase}
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer flex justify-center"
              >
                <span className="m-auto  font-bold p-1">+</span>
              </div>
            </div>

            <div className="flex ">
              <Heart
                className={`${
                  wishColor === 1
                    ? "border-red-500 fill-red-500 stroke-red-500"
                    : "  "
                }  border-2 p-1 rounded-md cursor-pointer`}
                width={30}
                height={32}
                onClick={handleWish}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Available Size</div>
            <div className="flex gap-2">
              {productDetail.sizes.map((data: any, index: number) => (
                <div
                  key={index}
                  className={`cursor-pointer border-1 p-1 text-xs px-2 rounded ${
                    selectedDiv === data.size
                      ? "bg-NeonPink text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => {
                    selectDiv(data.size);
                    setSize(data.size);
                    if (data.stock <= 0) {
                      setStock(false);
                      setQty(1);
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
          <button
            type="submit"
            className={`text-center font-bold rounded-2xl border-2 border-NeonPink py-1  ${
              stock
                ? "hover:bg-NeonPink text-NeonPink  hover:text-white  cursor-pointer"
                : "bg-slate-300 border-slate-300 text-white border-2 cursor-not-allowed "
            } `}
            // onClick={handleCart}
            onClick={() => {
              if (stock === true) {
                handleSubmit;
              }
            }}
          >
            Add to Cart
          </button>
          <div className="bg-NeonPink text-white font-bold text-center rounded-2xl py-1 cursor-pointer">
            Buy Now
          </div>
        </div>
      </form>
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
