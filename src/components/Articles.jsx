import React from "react";
import { blogs } from "../assets/data";
import Article from "./Article";

const Articles = () => {
  return (
    <>
      <h1 className="text-center text-4xl text-black font-bold mt-56">Check out Our latest article</h1>

      <svg className="mx-auto mt-6" width="56" height="2" viewBox="0 0 56 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="2" rx="1" fill="black"/>
</svg>


      {/* Black small line goes here */}

      <>
        <div className="flex mt-24 items-center justify-between mx-64  flex-wrap">
          {blogs.slice(0, 3).map((blog) => (
            <Article blog={blog} key={blog.id} />
          ))}
        </div>

        <button className='mx-[700px] rounded-[55px] hover:bg-blue-400 hover:text-white  border text-[18px] mt-28 font-bold h-[56px] w-[200px] text-blue-500 border-blue-400'>View All</button>
      </>
    </>
  );
};

export default Articles;
