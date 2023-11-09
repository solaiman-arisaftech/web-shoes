/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import img1 from "../../../public/resources/logshoes.png";
import { Jost } from "next/font/google";

const SignIn = () => {
  return (
    <section className=" bg-login-bg bg-cover bg-center w-full md:min-h-screen flex justify-between mx-64 px-4 md:px-16 lg:px-32 xl:px-64 py-36 gap-4" id="login">
      <div className=" self-center justify-center w-1/2 hidden md:block">
        <Image className="" src={img1} alt={""} height={650} width={650} />
      </div>
      <div className="flex flex-col gap-4 mt-40 w-full md:w-auto">
        <div className="flex flex-col text-5xl font-bold text-center">
          Welcome Back!
        </div>
        <div className="flex flex-col gap-2">
          <div>User Name</div>
          <div>
            <input
              className="w-full rounded border-purple  border-2 bg-transparent focus:border-NeonPink"
              type="text"
              placeholder="User Name"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="">Password</div>
          <div className="">
            <input
              className=" w-full rounded border-purple border-2 bg-transparent focus:border-NeonPink"
              type="text"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="self-end text-purple font-bold hover:text-NeonPink">
          <u>Forgot Password ?</u>
        </div>
        <button className="bg-gradient-to-r from-NeonPink to-purple rounded p-2 text-white text-lg  ">
          Login
        </button>
      </div>
    </section>
  );
};

export default SignIn;
