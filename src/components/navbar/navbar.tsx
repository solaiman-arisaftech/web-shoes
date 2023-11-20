/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { User2, ShoppingCart, Heart, Menu } from "lucide-react";
import CartList from "../cart/cartList";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className="w-full bg-white h-14 flex justify-between items-center shadow-lg px-4 mx-auto md:px-64 fixed z-50 ">
        <Link href={"/"} className="text-NeonPink font-extrabold text-4xl">
          Shoe
          <span>
            <u className="text-purple">s</u>
          </span>
        </Link>
        <div className="md:flex gap-10 hidden ">
          <Link
            href="/"
            className="hover:text-NeonPink font-medium smooth-scroll"
          >
            Home
          </Link>
          <>
            <Link
              className="hover:text-NeonPink font-medium"
              href="/all-products"
            >
              Products
            </Link>
            <Link className="hover:text-NeonPink font-medium" href="#about">
              About
            </Link>
            <Link className="hover:text-NeonPink font-medium" href="#reviews">
              Review
            </Link>
            <Link className="hover:text-NeonPink font-medium" href="#services">
              Services
            </Link>
          </>
        </div>
        <div className="hidden md:flex gap-2">
          <Link href="/wish-list">
            <Heart className="stroke-none fill-black hover:fill-NeonPink cursor-pointer" />
          </Link>
          <ShoppingCart
            className="stroke-black stroke-2 fill-black hover:fill-NeonPink hover:stroke-NeonPink cursor-pointer"
            onClick={toggleCart}
          />
          <Link href="#login">
            {" "}
            <User2 className="stroke-white fill-black hover:fill-NeonPink cursor-pointer" />
          </Link>
        </div>

        <div className="md:hidden  flex items-center">
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
      <div className="flex justify-end">{isCartOpen && <CartList toggleCart={toggleCart} setIsCartOpen={setIsCartOpen} />}</div>
      {/* <div className="flex items-end"><div><CartList/></div></div> */}
    </>
  );
};

export default Navbar;
