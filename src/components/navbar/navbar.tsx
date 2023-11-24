/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useContext } from "react";
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
    setIsCartOpen(!isCartOpen);
  };
  const {
    count,
    setCount,
    countWish,
    setWishCount,
    isCartOpen,
    setIsCartOpen,
  } = useContext(MyContext);

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
              {countWish}
            </sup>
          </Link>
          <div className="flex gap-2">
            <ShoppingCart
              className="stroke-black stroke-2 fill-black hover:fill-NeonPink hover:stroke-NeonPink cursor-pointer"
              onClick={toggleCart}
            />
            <sup className="pt-2 -ml-4 bg-red-500 text-white mb-2 px-1 py-1 rounded-full">
              {count}
            </sup>
          </div>
          <Link href="#login">
            {" "}
            <User2 className="stroke-white fill-black hover:fill-NeonPink cursor-pointer" />
          </Link>
        </div>

        <div className="md:hidden  flex items-center gap-2">
          <div className="flex gap-1">
            <ShoppingCart
              className="stroke-black stroke-2 fill-black hover:fill-NeonPink hover:stroke-NeonPink cursor-pointer"
              onClick={toggleCart}
            />
            <sup className="pt-2 -ml-3 bg-red-500 text-white mb-2 px-1 py-1 rounded-full">
              {count}
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

        {/* <div
        className={`md:hidden mobile-menu mt-64 ${isMobileMenuOpen ? "" : "hidden"}`}
      >
        <ul className="flex flex-col gap-4 border-2 w-full ">
          <li className="active   ">
            <Link href="index.html" className=" hover:stroke-NeonPink">
              Home
            </Link>
          </li>
          <li>
            <Link href="#services" className="block hover:stroke-NeonPink">
              Products
            </Link>
          </li>

          <li className="hover:stroke-NeonPink">
            <Link href="#contact" className="block  hover:stroke-NeonPink">
              About
            </Link>
          </li>
          <li>
            <Link href="" className="block  hover:stroke-NeonPink">
              Review
            </Link>
          </li>
          <li>
            <Link href="" className="block  hover:stroke-NeonPink">
              Services
            </Link>
          </li>
        </ul>
      </div> */}
      </nav>
      <div className="flex justify-end ">
        {isCartOpen && (
          <CartList toggleCart={toggleCart} setIsCartOpen={setIsCartOpen} />
        )}
        {/* {!isCartOpen && <CartList toggleCart={setIsCartOpen(false)}  />} */}
      </div>
      {/* <div className="flex items-end"><div><CartList/></div></div> */}
    </>
  );
};

export default Navbar;
