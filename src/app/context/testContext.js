"use client";
import React, { createContext, useState, useEffect, ReactNode, useMemo } from "react";
import { productData } from "../lib/data";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  // initial state from local storage
  const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existingWishItems = JSON.parse(localStorage.getItem("wishItems")) || [];

  const [myState, setMyState] = useState([])

  setMyState([1,2,3])

  setMyState(prev => {
    prev[2] = 4
    return prev
  })

  // state
  const [cartItems, setCartItems] = useState(existingCartItems)
  const [wishItems, setWishItems] = useState(existingWishItems)

  // effect
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem("wishItems", JSON.stringify(wishItems));
  }, [wishItems])

  // actions
  const addToCart = (items) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.id === item.id && item.size === item.size
    );

    if (existingIndex !== -1) {
      // Item exists, increase the quantity
      setCartItems(prev => {
        prev[existingIndex].qty += items.qty;
        return prev
      })
    } else {
      // Item does not exist, add it to the cart
      setCartItems(prev => {
        prev.push(items)
        return prev
      })
    }
  };

  const addToWishList = (items) => {
    const existingWishIndex = wishItems.findIndex(
      (item) => item.id === items.id && item.title === items.title
    );
    if (existingWishIndex !== -1) {
      // If exist, remove from wish list
      setWishItems(prev => {
        prev.splice(existingWishIndex, 1);
        return prev
      })
    } else {
      setWishItems(prev => {
        prev.push(items)
        return prev
      })
    }
  };

  // computed
  const cartItemslength = useMemo(() => cartItems.length, [cartItems])
  const wishItemsLength = useMemo(() => wishItems.length, [wishItems])

  const hasWishItems = useMemo(() => !!wishItems.length, [wishItems])
  const totalPrice = useMemo(() => {
    return cartItems.reduce((prev, cur) => prev + (cur.price * cur.qty), 0)
  }, [cartItems])
  const subTotals = useMemo(() => {
    return cartItems.map(item => item.qty * item.price)
  }, [cartItems])


  // const quantityToAdd = 1;
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartData, setCartData] = useState([]);
  //handle add to cart and count
  const [count, setCount] = useState(0);
  const [countWishItems, setCountWishItems] = useState(wishItemsLength);
  const [countCartItems, setCountCartItems] = useState(cartItemslength);
  const [wishColor, setWishColor] = useState(0);
  const [quantityCount, setQuantityCount] = useState(1);

  const [qty, setQty] = useState(1);

  const decrease = () => {
    if (qty <= 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };
  const increase = () => {
    setQty(qty + 1);
  };

  const cartItemsNew =  JSON.parse(localStorage.getItem("cartItems")) || []

  const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   let x = 0;
  //   cartItemsNew.map((item) => {
  //     x += item.price * item.qty;
  //     setTotal(x);
  //     return x;
  //   });
  // }, );



  return (
    <MyContext.Provider
      value={{
        count,
        setCount,
        isCartOpen,
        setIsCartOpen,
        countWishItems,
        setCountWishItems,
        countCartItems,
        setCountCartItems,
        quantityCount,
        setQuantityCount,
        addToCart,
        addToWish: addToWishList,
        existingCartItems,
        existingWishItems,
        wishColor, 
        setWishColor,
        increase,
        decrease,
        qty,
        setQty,
        total,
        totalPrice,
        subTotals

      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
