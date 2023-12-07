import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
// import logo from "../../../public/resources/CV-Sorting_logo.svg";
const Footer = () => {
  return (
    <footer className="bg-slate-100 flex flex-col ">
      <div className=" flex flex-col md:flex-row justify-between p-4 md:py-12 md:px-16 lg:px-32 xl:px-64 gap-8 md:gap-4 lg:gap-8 ">
        <div className="flex flex-col gap-4 md:gap-6 w-full">
          <div className="text-NeonPink font-extrabold text-4xl">
            Shoe
            <span >
              <u className="text-purple">s</u>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-textSub text-sm font-normal">
              Easily sort CVs and find skills using CV Sorting to speed up your
              hiring process.
            </div>
            <div className="flex flex-col">
              <div className="text-textSub text-base font-normal">Call US</div>
              <div className="text-primary text-lg font-normal">
                +880 1678 564 984
              </div>
            </div>
            <div className="text-textSub text-sm font-normal">
              youremail@gmail.com
            </div>
            <div className="text-textSub text-sm font-normal">
              Flat 4, 79 Chester Road, Exeter, EX96 1FY
            </div>
          </div>
        </div>
        {/* <div className="flex flex-row-reverse justify-between md:justify-evenly gap-4 md:gap-24 md:flex-row w-full"> */}
          <div className="flex flex-col  gap-4 md:gap-6 w-full">
            <div className=" text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple ">
              Get Help
            </div>
            <div className="flex flex-col gap-2 text-textSub text-sm font-normal">
              <div>FAQ</div>
              <div>Order Status</div>
              <div>Shipping</div>
              <div>Returns</div>
              <div>Payment Options</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 w-full">
            <div className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple">
              Our Stores
            </div>
            <div className="flex flex-col gap-2 text-textSub text-sm font-normal">
              <div>Login/Register</div>
              <div>Upload Job Circular and Candidates CVs</div>
              <div>Upload Job Circular</div>
              <div>Shortlisted Best Candidates</div>
              <div>Employers Dashboard</div>
            </div>
          </div>
        {/* </div> */}

        <div className="flex flex-col gap-4 md:gap-6 w-full">
          <div className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple">
            Preferance
          </div>
          <div className="flex flex-col gap-2 text-textSub text-sm font-normal">
            <div>About US</div>
            <div>Contact Us</div>
            <div>Terms & Conditions</div>
            <div>Privacy & Policy</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 ">
          <div className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple">
            Newsletter
          </div>
          <div className="flex flex-col gap-2 text-textSub  font-normal">
            <input
              className="w-full text-xs rounded-3xl bg-slate-200 border-none bg-transparent focus:border-NeonPink "
              type="text"
              placeholder="Your email id here"
            />
            <button className="bg-gradient-to-r from-NeonPink to-purple rounded-3xl text-white text-sm w-28 p-1  ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between  p-4 gap-4 md:px-64 border-solid border-t-2 border-slate-300">
        <div className="text-textSub text-sm font-normal text-center self-center ">
          2023 © All rights reserved by Nike Shoes.
        </div>
        <div className="hidden md:flex gap-2">
          <Facebook className="stroke-none fill-NeonPink hover:fill-white hover:stroke-NeonPink" />
          <Instagram className="stroke-white stroke-2 fill-NeonPink hover:fill-white hover:stroke-NeonPink" />
          <Twitter className="stroke-white fill-NeonPink hover:fill-white hover:stroke-NeonPink" />
          <Youtube className="stroke-white fill-NeonPink hover:fill-white hover:stroke-NeonPink" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
