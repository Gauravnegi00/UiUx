import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";

import videoSrc from "../assets/Backgroung.mp4";
import Logo from "../assets/Logo.png";
function Landing() {
  return (
    <div className=" bg-white border-none w-[96%] h-[95%] rounded-4xl flex justify-center items-center overflow-hidden  ">
      <div className="w-full h-full border-none relative ">
        <video
          className="w-full h-full border-none object-fill rounded-4xl "
          autoPlay
          loop
          muted
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Over lay */}
      <div className="absolute w-[96%] h-[95%] rounded-4xl ">
        {/* Nav Bar */}
        <div className="w-full h-[80px] p-10 flex items-center  pl-[50px] ">
          {/* logo */}
          <div className="flex items-center space-x-2  ">
            {" "}
            <img src={Logo} alt="Logo" className="w-12 h-12" />
            <span className="  text-3xl  font-bold ">zyrixcraft</span>
          </div>
          {/* Center  */}
          <div className="flex space-x-8  bg-[#dad7da]  rounded-full px-6 py-3  ml-[250px]">
            <div className="relative group inline-block cursor-pointer">
              <span className="text-black text-lg ">Home</span>

              <div className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#4541f1] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></div>
            </div>
            <div className="relative group inline-block cursor-pointer">
              <span className="text-black text-lg ">Reviews</span>

              <div className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#4541f1] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></div>
            </div>
            <div className="relative group inline-block cursor-pointer">
              <span className="text-black text-lg ">Contact Us</span>

              <div className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#4541f1] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></div>
            </div>
          </div>
          {/* End */}
          <div className=" w-[470px] h-[80px] flex items-center justify-between ml-[90px] ">
            <div className="w-[40%] flex   bg-[#dad7da]  rounded-full  py-3 px-2 text-lg hover:cursor-pointer hover:bg-[#4541f1] hover:text-white">
              
              + Become a Client
            </div>
            <div className="w-[60px] h-[60px] rounded-full bg-[#cfc4c48e] backdrop-blur-lg shadow-lg flex justify-center items-center border border-white/20">
              <i className="fi fi-br-bars-staggered text-2xl text-black cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
