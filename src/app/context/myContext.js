"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

const MyContext = createContext();

const ContextProvider = ({ children }) => {

  const existingCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const cartItemslength=existingCartItems.length

  const existingWishItems = JSON.parse(localStorage.getItem("wishItems") || "[]");
  const wishItemslength=existingWishItems.length

  
  const [isCartOpen, setIsCartOpen] = useState(false);
  //handle add to cart and count
  const [count, setCount] = useState(0);
  const [countWish, setWishCount] = useState(wishItemslength);
  const [cartData, setCartData] = useState([]);
  const [countCartItems, setCountCartItems]=useState(cartItemslength)
  const [disable, setDisable] = useState(false);

  return (
    <MyContext.Provider
      value={{
        count,
        setCount,
        isCartOpen,
        setIsCartOpen,
        cartData,
        setCartData,
        countWish,
        setWishCount,
        countCartItems, 
        setCountCartItems,
        disable, 
        setDisable
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
