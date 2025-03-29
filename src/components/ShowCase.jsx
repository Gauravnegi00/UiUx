import React from "react";
import Iphone from "../assets/iphone01.png";
import laptop from "../assets/laptop01.png";
import { motion } from "framer-motion";
function ShowCase() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-between pb-10 items-center text-white relative">
      {/* Top Section */}
      <div className="w-[80%] h-[30%] flex justify-between items-center">
        <div className="w-[70%]">
          <span className="text-[50px] font-bold">
            &#123; Modern &#125; <br /> Responsive Web & Mobile
          </span>
        </div>
        <span className="text-[200px] text-gray-500 font-bold">**</span>
      </div>

        {/* SVG Middle */}
      <div className="absolute w-[50%] h-[50%] left-[10%]  ">
        <svg
          className="dev-line_line_svg__b39Po absolute w-[200%] h-[200%]  z-0 "
          viewBox="0 0 1728 1101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
            style={{ strokeDasharray: "3246.53, 0" }}
            stroke="gray"
          ></path>
        </svg>
        <div className=" absolute w-full h-full top-0  flex ">
          <motion.img
            src={laptop}
            alt="Laptop"
            className="h-[450px] absolute top-20 left-[250px]"
            animate={{ y: [0, -20, 0] }} 
            transition={{
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
            }}
          />

          {/* Animated iPhone Image */}
          <motion.img
            src={Iphone}
            alt="iPhone"
            className="h-[300px] absolute top-[180px] left-[690px] z-4 "
            animate={{ x: [0, 20, 0] }} 
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      {/*Bottom */}
      <div className="w-[80%] flex justify-between items-center z-1">
        <div className="w-[70%]">
          <span className="text-2xl">
            Transforming your vision into <br /> reality—strategically and
            creatively
          </span>
        </div>
        <div className="w-[30%] flex justify-center items-center gap-10">
            <button className="bg-gray-400 rounded-3xl p-3 text-lg text-black hover:cursor-pointer ">Check Our PortFolio</button>
            <button className="bg-[#695a5a93] rounded-3xl p-3 text-lg  text-white hover:cursor-pointer">Get in Touch</button>
        </div>
      </div>

      
    </div>
  );
}

export default ShowCase;
