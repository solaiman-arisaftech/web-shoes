"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { productData } from "../lib/data";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const existingCartItems = JSON.parse(
    localStorage.getItem("cartItems") || "[]"
  );
  const cartItemslength = existingCartItems.length;

  const existingWishItems = JSON.parse(
    localStorage.getItem("wishItems") || "[]"
  );
  const wishItemslength = existingWishItems.length;

  const quantityToAdd = 1;
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  //handle add to cart and count
  const [count, setCount] = useState(0);
  const [countWishItems, setCountWishItems] = useState(wishItemslength);
  const [countCartItems, setCountCartItems] = useState(cartItemslength);
  const [disable, setDisable] = useState(false);
  const [quantityCount, setQuantityCount] = useState(1);
  const decrease = () => {
    if (quantityCount == 0) {
      setQuantityCount(0);
    } else {
      setQuantityCount(quantityCount - 1);
    }
  };
  const increase = () => {
    setQuantityCount(quantityCount + 1);
  };

  const addToCart = (product, id) => {
    // Get existing cart items from local storage
    console.log("product ", product);
    const existingCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    // existingCartItems.map((data)=>{
    // console.log(data)
    //   console.log("from pCard",existingCartItems.id)
    //   if(data.id!=product.id){
    //     setQuantityCount(quantityCount+1)
    //     console.log("pId=",product.id, "eId=",existingCartItems.id, "QCount=",quantityCount)
    //   }
    //   else{
    //     console.log("pId=",product, "eId=",existingCartItems, "QCount=",quantityCount)
    //     const updatedCartItems = [...existingCArtItems, product];
    //   localStorage.setItem("wishItems", JSON.stringify(updatedCartItems));
    //   }
    // })
    const existingProductIndex = existingCartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      alert("This product already exist in your cart");
    } else {
      existingCartItems.push({ ...product });
      setCountCartItems(countCartItems + 1);
    }
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
  };
  const addToWish = (product) => {
    const existingWishItems = JSON.parse(
      localStorage.getItem("wishItems") || "[]"
    );
    const existingWishIndex = existingWishItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingWishIndex >= 0) {
      alert("This product already exist in your wishlist");
    } else {
      existingWishItems.push({ ...product });
      setCountWishItems(countWishItems + 1);
    }
    // const updatedWishItems = [...existingWishItems, product];
    localStorage.setItem("wishItems", JSON.stringify(existingWishItems));
  };

  return (
    <MyContext.Provider
      value={{
        count,
        setCount,
        isCartOpen,
        setIsCartOpen,
        cartData,
        setCartData,
        countWishItems,
        setCountWishItems,
        countCartItems,
        setCountCartItems,
        disable,
        setDisable,
        quantityCount,
        setQuantityCount,
        quantityToAdd,
        increase,
        decrease,
        addToCart,
        addToWish
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
