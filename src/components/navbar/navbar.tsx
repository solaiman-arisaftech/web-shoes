"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { User2, ShoppingCart, Heart, Menu } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-white h-14 flex justify-between items-center shadow-lg px-4 mx-auto md:px-64 fixed z-50 ">
      
        <Link href={'/'} className="text-NeonPink font-extrabold text-4xl">
          Shoe
          <span className="text-purple">
            <u>s</u>
          </span>
        </Link>
        <div className="md:flex gap-10 hidden ">
          <Link  href={""} className="hover:text-NeonPink font-medium smooth-scroll">Home</Link>
          <><Link className="hover:text-NeonPink font-medium" href={""}>Products</Link>
          <Link className="hover:text-NeonPink font-medium" href={""}>About</Link>
          <Link className="hover:text-NeonPink font-medium" href={""}>Review</Link>
          <Link className="hover:text-NeonPink font-medium" href={""}>Services</Link></>
        </div>
        <div className="hidden md:flex gap-2">
          <Heart className="stroke-none fill-black hover:fill-NeonPink" />
          <ShoppingCart className="stroke-black stroke-2 fill-black hover:fill-NeonPink hover:stroke-NeonPink" />
          <User2 className="stroke-white fill-black hover:fill-NeonPink" />
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
  );
};

export default Navbar;
