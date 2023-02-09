import React from "react";
import mask from "../assets/mask.png";

const Testimonials = () => {
  return (
    <div className="h-[425px] mx-auto mt-60  w-[1120px] rounded-3xl bg-gradient-to-br from-blue-400 to-blue-500 ">
      <h1 className="text-3xl text-white text-center pt-16">
        What our customer are saying
      </h1>
      <svg
        className="mx-auto mt-6"
        width="56"
        height="2"
        viewBox="0 0 56 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="2" rx="1" fill="white" />
      </svg>

      <div className="flex mt-24 items-center justify-around ">
        {/* Left */}
        <div className="">
          <img src={mask} alt="" />
        </div>
        <div className="flex -ml-40 flex-col">
          <h2 className="text-[22px] font-bold text-white ">Edward Newgate</h2>
          <p className="text-[18px] text-white font-normal ">Founder Circle</p>
        </div>

        {/* Right */}
        <div>
          <p className="text-[19px]  text-white font-normal ">
            “Our dedicated patient engagement app and <br /> web portal allow
            you to access information <br /> instantaneously (no tedeous form,
            long calls, <br /> or administrative hassle) and securely”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
