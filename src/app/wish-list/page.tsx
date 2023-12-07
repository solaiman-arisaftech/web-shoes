"use client";
import React, { useState, useContext } from "react";
import WishListCard from "./wishListCard";
import PaginationCard from "@/app/components/pagination/paginations";
import { MyContext } from "@/app/context/myContext";
import { table } from "console";

const Page = (product: any) => {
  const { countWishItems, setCountWishItems, addToWish } =
    useContext(MyContext);
  // @ts-ignore
  const wishItems = JSON.parse(localStorage.getItem("wishItems")) || [];
  return (
    <section
      className="w-full flex flex-col py-36 px-4 md:px-16 lg:px-32 xl:px-64 gap-8 bg-white "
      id="products"
    >
      <div className="flex self-center text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple pb-10">
        Wishlist Products
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-whitw w-full border-1 shadow-lg">
          {wishItems.length > 0 ? (
            <table className="p-4 w-full table-auto">
              <thead className="flex justify-between p-4 border-b-1 text-center w-full">
                <tr className="flex justify-between w-full">
                  <th className="text-center w-1/4"></th>
                  <th className="text-center w-1/4">Title</th>
                  <th className="text-center w-1/4">Price</th>
                  <th className="w-1/4"></th>
                </tr>
              </thead>
              {wishItems.map((product: any, index: number) => (
                <tbody key={index}>
                  <WishListCard
                    key={product.id}
                    product={product}
                    removeWish={() => {
                      addToWish(product);
                    }}
                  />
                </tbody>
              ))}
            </table>
          ) : (
            <p className="w-full px-48 py-48 text-center">
              Your wish list is empty.
            </p>
          )}
        </div>
      </div>
      
    </section>
  );
};

export default Page;
