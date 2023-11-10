/* eslint-disable react/no-unescaped-entities */
import React from "react";
// import ProductCard from "./productCard";
import red_img1 from "../../../public/resources/red_shoes1.png";
import red_img2 from "../../../public/resources/red_shoes2.png";
import red_img3 from "../../../public/resources/red_shoes3.png";
import red_img4 from "../../../public/resources/red_shoes4.png";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="w-full flex flex-col py-36 px-4 md:px-16 lg:px-32 xl:px-64  gap-8 "
      id="about"
    >
      <div className="flex self-center text-black text-center text-5xl pb-10 font-semibold gap-4">
        <span>WEB</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-NeonPink to-purple">
          ABOUT
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 w-full ">
        <div className="flex w-full  md:w-2/4 gap-4 ">
          <div className="flex flex-col gap-4 p-2 w-1/5 md:w-1/6 h-48 ">
            <div className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2  hover:duration-300 opacity-80 hover:opacity-100">
              <Image src={red_img1} alt="" width={200} height={200} />
            </div>
            <div className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2 hover:duration-300  opacity-80 hover:opacity-100">
              <Image src={red_img2} alt="" width={200} />
            </div>
            <div className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2 hover:duration-300  opacity-80 hover:opacity-100">
              <Image src={red_img3} alt="" width={200} />
            </div>
            <div className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2 hover:duration-300  opacity-80 hover:opacity-100">
              <Image src={red_img4} alt="" width={200} />
            </div>
          </div>
          <div className=" border-NeonPink shadow-md shadow-NeonPink  rounded-xl border-2 p-2 w-full flex items-center justify-center  ">
            <Image
              className="object-fit "
              src={red_img1}
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex w-full md:w-2/4 gap-6 p-8 text-base text-black text-justify border-purple rounded-xl border-2 shadow-md shadow-purple">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </div>
      </div>
      <div className="self-center flex justify-center items-center">
        <button className="border-NeonPink border-1 text-black hover:bg-NeonPink hover:text-white px-2 py-1 shadow-md shadow-NeonPink font-semibold hover:duration-300 ">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default About;
