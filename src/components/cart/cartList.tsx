"use client";
import React, { useState, useEffect, useContext, useRef } from "react";
import img1 from "../../../public/resources/shoes1.png";
import Image from "next/image";
import { describe } from "node:test";
import CartDetails from "./cartDetails";
import Link from "next/link";
import { MyContext } from "@/app/context/myContext";

const CartList = ({toggleCart, buttRef}: any) => {
  const outsideDitectRef = useRef<HTMLInputElement>(null);
const {setIsCartOpen, isCartOpen} = useContext(MyContext)

useEffect(() => {
    
    const handleOutSideClick = (event: any) => {
    
        if (buttRef.current?.contains(event.target)) {
        toggleCart()
        setIsCartOpen(true)
          console.log("both butt", isCartOpen);
        } else if (!outsideDitectRef.current?.contains(event.target)) {
          toggleCart();
          // setIsCartOpen(true)
          // console.log("outside ")
        } else if(buttRef.current?.contains(event.target)) {
          console.log("on butt")
          // setIsCartOpen(true)
          // toggleCart()
        } else {
          console.log("nothing")
        }
      
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [isCartOpen, buttRef, toggleCart, setIsCartOpen]);

  

  const { countCartItems, setCountCartItems } = useContext(MyContext);
  // Get cart items from local storage
  const [cartItems, setCartItems] = React.useState(
    JSON.parse(localStorage.getItem("cartItems") || "[]")
  );
  const removeFromCart = (index: number) => {
    // Remove the item at the specified index from the cart
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    // Update local storage and state
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };
  const [score, setScore] = useState(0);
  const increaseScore = () => {
    setScore(score + 1);
  };

  return (
    <div
      className=" bg-slate-100 w-full md:w-auto fixed mt-14 flex flex-col items-center shadow-md shadow-slate-300 border-purple z-40 "
      ref={outsideDitectRef}
    >
      <div className="bg-gradient-to-r from-NeonPink to-purple text-white text-lg font-bold w-full justify-center text-center py-1">
        Selected item list
      </div>

      {/* <div>
        <div>Total item = {score}</div>
        <button onClick={increaseScore}>increase score</button>
      </div> */}
      <div className="bg-slate-100 w-full">
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map(
              
              (product: any, index: number, totalPrice: number) => (
                <li key={index}>
                  <CartDetails
                    key={product.id}
                    product={product}
                    remove={() => {
                      removeFromCart(index),
                        setCountCartItems(countCartItems - 1);
                    }}
                  />
                </li>
              )
            )}
          </ul>
        ) : (
          <p className="w-full px-36 py-64">Your cart is empty.</p>
        )}
      </div>

      <div className="flex w-full justify-between  ">
        <div
          className="bg-gradient-to-r from-NeonPink to-purple text-white w-1/2 text-center text-lg py-1"
          onClick={toggleCart}
        >
          <Link href="/checkout"> Checkout</Link>
        </div>

        <div className="bg-gradient-to-r from-NeonPink to-purple text-white w-1/2 text-center text-lg py-1">
          Total price: $1024.99{" "}
        </div>
      </div>
    </div>
  // <><div className="text-black">Hello</div></>
  );
};

export default CartList;
