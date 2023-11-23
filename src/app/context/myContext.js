"use client";
import React, { createContext, useState, ReactNode } from "react";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
 
  const [isCartOpen, setIsCartOpen] = useState(false);

  //handle add to cart and count
  const [count, setCount]= useState(0);
  const [countWish, setWishCount]= useState(0);
  
  const [cartData, setCartData] = useState([])

  return (
    <MyContext.Provider value={{ count, setCount, isCartOpen, setIsCartOpen, cartData, setCartData, countWish, setWishCount}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
