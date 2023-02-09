import React from "react";

const Apps = () => {
  return (
    <div className="mt-64">
      <h1 className="text-4xl font-bold text-black">
        Download our <br/> mobile apps
      </h1>

      <svg className="mt-6" width="56" height="2" viewBox="0 0 56 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="2" rx="1" fill="black"/>
</svg>

      <p className="text-lg text-gray-400 font-light mt-12">
        Our dedicated patient engagement app and <br/> web portal allow you to access
        information <br/> instantaneously (no tedeous form, long calls,<br/> or
        administrative hassle) and securely
      </p>
      <button className='rounded-[55px] hover:bg-blue-400 hover:text-white  mt-10 border text-[18px] font-bold h-[56px] w-[200px] text-blue-500 border-blue-400'>Download</button>
    </div>
  );
};

export default Apps;
