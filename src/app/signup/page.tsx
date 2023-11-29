/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import img1 from "../../../public/resources/logshoes.png";
import { Jost } from "next/font/google";
import Link from "next/link";

const SignUp = () => {
  return (
    <section className=" bg-login-bg bg-cover bg-center w-full md:min-h-screen flex justify-between px-64 px-4 md:px-16 lg:px-32 xl:px-64 py-16  md:py-10 gap-4">
      <div className=" self-center justify-center w-1/2 hidden md:block">
        <Image className="" src={img1} alt={""} height={650} width={650} />
      </div>
      <div className="flex flex-col gap-4  md:mt-40 w-full md:w-auto">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col text-5xl font-bold text-center px-8 text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple">
            Sign Up Now
          </div>
          <div className="text-center text-sm text-slate-700">
            Please signup to continue using our app
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Email</div>
          <div>
            <input
              className="w-full rounded border-purple  border-2 bg-transparent focus:border-NeonPink"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">User Name</div>
          <div>
            <input
              className="w-full rounded border-purple  border-2 bg-transparent focus:border-NeonPink"
              type="text"
              placeholder="User Name"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Password</div>
          <div className="">
            <input
              className=" w-full rounded border-purple border-2 bg-transparent focus:border-NeonPink"
              type="text"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Confirm Password</div>
          <div className="">
            <input
              className=" w-full rounded border-purple border-2 bg-transparent focus:border-NeonPink"
              type="text"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="flex items-center">
          <input
            id="vue-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            htmlFor="vue-checkbox"
            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <u className="text-NeonPink">terms and conditions.</u>
          </label>
        </div>
        <button className="bg-gradient-to-r from-NeonPink to-purple rounded p-2 text-white text-lg  ">
          SignUp
        </button>
        <div className="">
          Already signed up?
          <Link href="/login">
            <u className="font-bold text-purple">Login In</u>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
