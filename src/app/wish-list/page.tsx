"use client";
import React, { useState, useContext } from "react";
import WishListCard from "./wishListCard";
import PaginationCard from "@/components/pagination/paginations";
import { MyContext } from "@/app/context/myContext";
import { table } from "console";

const Page = (product: any) => {
  const { countWishItems, setCountWishItems, addToWish } =
    useContext(MyContext);

  // Get wish items from local storage
  // const [wishItems, setWishItems] = React.useState(
  //   JSON.parse(localStorage.getItem("wishItems") || "[]")
  // );

  // const removeFromWish = (index: number) => {
  //   // Remove the item at the specified index from the cart
  //   const updatedWishItems = [...wishItems];
  //   updatedWishItems.splice(index, 1);
  //   // Update local storage and state
  //   localStorage.setItem("wishItems", JSON.stringify(updatedWishItems));
  //   setWishItems(updatedWishItems);
  //   setDisable(!disable);
  // };
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
        <div className="bg-slate-100 w-full border-1 shadow-lg">
          {wishItems.length > 0 ? (
            <table className="p-4 w-full">
              <thead className="flex justify-evenly p-4 border-b-2">
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Size</th>
                <th>Image</th>
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
      <div className="flex justify-center">
        <PaginationCard />
      </div>
    </section>
  );
};

export default Page;
