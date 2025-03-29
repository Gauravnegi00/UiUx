import React from "react";
import img1 from "../assets/img1.jpg"; 
import img2 from "../assets/img2.jpg"; 

const DataCompo = () => {
  return (
    <div className="h-screen w-screen bg-stone-300 flex items-center justify-center p-4  space-y-20 ">
      <div className="h-[95%] w-[95%] max-w-none flex flex-col items-center justify-center  shadow-2xl bg-[#f8f5f2] rounded-[100px]  gap-6 font-[Poppins] text-center p-8">
        
       
        <h1 className="text-7xl font-bold text-[#1e1f24]">
        Innovation drives success
        </h1>

        
        <span className="text-5xl text-[#1e1f24] font-medium">
        We believe in <span className="font-semibold text-[#1e1f24]">Technology</span>
          <span className="inline-block mx-2">
            <img 
              src={img1} 
              alt="Tech Image" 
              className="w-[190px] h-[80px] rounded-[100px] border-none object-cover inline-block" 
            />
          </span>
          <span className="font-semibold text-[#1e1f24]">and Creativity</span> 
        </span>
       
        <span className="text-6xl text-[#1e1f24] font-medium">
          <span className="inline-block mx-2">
            <img 
              src={img2} 
              alt="AI Image" 
              className="w-[190px] h-[80px] rounded-[100px] object-cover inline-block border-none " 
            />
          </span>
          <span className="font-semibold text-[#5e7984]">transforming possibilities</span>
        </span>
        
      </div>
    </div>
  );
};

export default DataCompo;
