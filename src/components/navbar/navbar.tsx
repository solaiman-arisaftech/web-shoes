/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import Link from "next/link";
import { User2, ShoppingCart, Heart, Menu } from "lucide-react";
import CartList from "../cart/cartList";
import { MyContext } from "@/app/context/myContext";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const selectedMenu = (id: any) => {
    setActiveMenu(id);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleCart = () => {
    // console.log("Clicked");
    // console.log("REf ", buttRef.current?.contains)
    // console.log("first ", isCartOpen)
    setIsCartOpen( (prev: boolean) => !prev);
    // console.log("last ", isCartOpen)
  };
  const {
    countCartItems,
    setCountCartItems,
    countWishItems,
    setCountWishItems,
    isCartOpen,
    setIsCartOpen,
  } = useContext(MyContext);

  // useEffect(() => {
  //   console.log("navbar effect ", countCartItems);
  // }, [countCartItems, isCartOpen]);
  const buttRef = useRef<any>(null)
  return (
    <>
      <nav className="w-full bg-white h-14 flex justify-between items-center shadow-lg px-4 mx-auto md:px-64 fixed z-50  ">
        <Link href={"/"} className="text-NeonPink font-extrabold text-4xl">
          Shoe
          <span>
            <u className="text-purple">s</u>
          </span>
        </Link>
        <div className="md:flex gap-10 hidden ">
          <Link
            href="/"
            // className="hover:text-NeonPink font-medium smooth-scroll"
            className={`cursor-pointer hover:text-NeonPink font-medium smooth-scroll ${
              activeMenu === 1 ? "text-NeonPink" : "text-black"
            }`}
            onClick={() => selectedMenu(1)}
          >
            Home
          </Link>
          <>
            <Link
              href="/all-products"
              className={`cursor-pointer hover:text-NeonPink font-medium smooth-scroll ${
                activeMenu === 2 ? "text-NeonPink" : "text-black"
              }`}
              onClick={() => selectedMenu(2)}
            >
              Products
            </Link>
            <Link
              href="#about"
              className={`cursor-pointer hover:text-NeonPink font-medium smooth-scroll ${
                activeMenu === 3 ? "text-NeonPink" : "text-black"
              }`}
              onClick={() => selectedMenu(3)}
            >
              About
            </Link>
            <Link
              href="#reviews"
              className={`cursor-pointer hover:text-NeonPink font-medium smooth-scroll ${
                activeMenu === 4 ? "text-NeonPink" : "text-black"
              }`}
              onClick={() => selectedMenu(4)}
            >
              Review
            </Link>
            <Link
              href="#services"
              className={`cursor-pointer hover:text-NeonPink font-medium smooth-scroll ${
                activeMenu === 5 ? "text-NeonPink" : "text-black"
              }`}
              onClick={() => selectedMenu(5)}
            >
              Services
            </Link>
          </>
        </div>
        <div className="hidden md:flex gap-2">
          <Link href="/wish-list" className="flex gap-2">
            <Heart className="stroke-none fill-black hover:fill-NeonPink cursor-pointer" />
            <sup className="pt-2 -ml-4 bg-red-500 text-white mb-2 px-1 py-1 rounded-full">
              {countWishItems}
            </sup>
          </Link>
          <div className="flex gap-2"  onClick={toggleCart}>
            <ShoppingCart
              className="stroke-black stroke-2 fill-black hover:fill-NeonPink hover:stroke-NeonPink cursor-pointer"
              ref={buttRef}
            />
            <sup className="pt-2 -ml-4 bg-red-500 text-white mb-2 px-1 py-1 rounded-full">
              {countCartItems}
            </sup>
          </div>
          <Link href="/login" >
            {" "}
            <User2 className="stroke-white fill-black hover:fill-NeonPink cursor-pointer" />
          </Link>
        </div>

        <div className="md:hidden  flex items-center gap-2">
          <div className="flex gap-1" >
            <ShoppingCart
              className="stroke-black stroke-2 fill-black hover:fill-NeonPink hover:stroke-NeonPink cursor-pointer"
              onClick={toggleCart}
              
            />
            <sup className="pt-2 -ml-3 bg-red-500 text-white mb-2 px-1 py-1 rounded-full">
              {countCartItems}
            </sup>
          </div>
          <button
            className="outline-none mobile-menu-button"
            onClick={toggleMobileMenu}
            
          >
            <Menu
              className={`w-6 h-6 text-gray-500 fill-none stroke-current ${
                isMobileMenuOpen ? "hover:text-primary" : " "
              }`}
            />
          </button>
        </div>

     
      </nav>
      <div className="flex justify-end ">
        {isCartOpen && (
          <CartList toggleCart={toggleCart} buttRef={buttRef}/>
        )}
       
      </div>
   
    </>
  );
};

export default Navbar;
