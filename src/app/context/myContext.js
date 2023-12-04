"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { productData } from "../lib/data";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const existingCartItems = localStorage.getItem("cartItems");
  const cartItemslength = existingCartItems.length;

  const existingWishItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const wishItemslength = existingWishItems.length;

  const quantityToAdd = 1;
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  //handle add to cart and count
  const [count, setCount] = useState(0);
  const [countWishItems, setCountWishItems] = useState(wishItemslength);
  const [countCartItems, setCountCartItems] = useState(cartItemslength);
  const [disable, setDisable] = useState(true);
  const [quantityCount, setQuantityCount] = useState(1);

  const addToCart = (product) => {
    const existingCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );

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
    console.log("product wish ", product);
    const existingWishItems = JSON.parse(
      localStorage.getItem("wishItems") || "[]"
    );
    const existingWishIndex = existingWishItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingWishIndex >= 0) {
      // alert("This product already exist in your wishlist");
      // setDisable(false)
    } else {
      existingWishItems.push({ ...product });
      setCountWishItems(countWishItems + 1);
    }
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
        addToCart,
        addToWish,
        existingCartItems,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
