import React from "react";

const HealthProviders = () => {
  return (
    <div className="mt-72">
      <h1 className="text-[36px] font-bold ">Leading healthcare <br/> providers</h1>
      <svg className="mt-6" width="56" height="2" viewBox="0 0 56 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="2" rx="1" fill="black"/>
</svg>

      <p className="pt-[30px] text-[18px] font-light text-gray-400">
        Trafalgar provides progressive, and affordable <br/> healthcare, accessible on
        mobile and online for <br/> everyone. To us, it’s not just work. We take pride<br/>
        in the solutions we deliver
      </p>
      <button className='rounded-[55px] mt-10 hover:bg-blue-400 hover:text-white  border text-[18px] font-bold h-[56px] w-[200px] text-blue-500 border-blue-400'>Learn More</button>
    </div>
  );
};

export default HealthProviders;
