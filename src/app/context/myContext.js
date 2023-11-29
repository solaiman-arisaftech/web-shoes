"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { productData } from "../lib/data";

const MyContext = createContext();

const ContextProvider = ({ children }) => {

  const existingCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const cartItemslength=existingCartItems.length

  const existingWishItems = JSON.parse(localStorage.getItem("wishItems") || "[]");
  const wishItemslength=existingWishItems.length

  const quantityToAdd = 1;
  const [isCartOpen, setIsCartOpen] = useState(false);
  //handle add to cart and count
  const [count, setCount] = useState(0);
  const [countWish, setWishCount] = useState(wishItemslength);
  const [cartData, setCartData] = useState([]);
  const [countCartItems, setCountCartItems]=useState(cartItemslength)
  const [disable, setDisable] = useState(false);
  const [quantityCount, setQuantityCount] = useState(1);
  
  
  const addToCart = (product, id) => {
    // Get existing cart items from local storage
    console.log("product ", product)
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
    const existingProductIndex= existingCartItems.findIndex((item)=>item.id === product.id)
      if(existingProductIndex !== -1){
        existingCartItems[existingProductIndex].quantity +=1
      }
      else{
        existingCartItems.push({...product, quantity:1})
      }
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
   
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
        countWish,
        setWishCount,
        countCartItems, 
        setCountCartItems,
        disable, 
        setDisable,
        quantityCount,
        setQuantityCount,
        quantityToAdd,
       
        addToCart
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
