"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { productData } from "../lib/data";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartItemslength = existingCartItems.length;

  const existingWishItems = JSON.parse(localStorage.getItem("wishItems")) || [];

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

  const addToCart = (formData) => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingIndex = cart.findIndex(
      (item) => item.id === formData.id && item.size === formData.size
    );

    if (existingIndex !== -1) {
      // Item exists, increase the quantity
      cart[existingIndex].qty = formData.qty;
    } else {
      // Item does not exist, add it to the cart
      cart.push(formData);
      setCountCartItems(countCartItems + 1);
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  const addToWish = (wishData) => {
    const existingWishItems =
      JSON.parse(localStorage.getItem("wishItems")) || [];

    const existingWishIndex = existingWishItems.findIndex(
      (item) => item.id === wishData.id && item.title === wishData.title
    );
    if (existingWishIndex !== -1) {
      // alert("This product already exist in your wishlist");
      existingWishItems.splice(existingWishIndex, 1);
      setCountWishItems(countWishItems - 1);
    } else {
      existingWishItems.push(wishData);
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
        existingWishItems,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
