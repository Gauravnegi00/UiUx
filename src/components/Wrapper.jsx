import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import Footer from "./Footer";
import Marque from "./Marque";
import ShowCase from "./ShowCase";
import ShowCase2 from "./ShowCase2";
import Portfolio from "./Portfolio";
import Services from "./Services";

function Wrapper() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("ScrollY:", window.scrollY); // Debugging
      setScrolled(window.scrollY > 850);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[100vw] h-[100%] flex flex-col items-center justify-start pt-2  ">
      {/* Sticky Header */}
      <div className="fixed top-2 right-[50px] w-[350px] h-[80px] flex justify-between pr-5 items-center z-50 gap-10 transition-all duration-300  ">
        <div
          className={`w-[50%] flex rounded-full py-3 px-3 text-lg hover:cursor-pointer transition-all duration-300 ${
            scrolled ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
          }`}
        >
          + Become a Client
        </div>
        <div className="w-[60px] h-[60px] rounded-full bg-[#cfc4c48e] backdrop-blur-lg shadow-lg flex items-center justify-center border border-white/20">
          <i className="fi fi-br-bars-staggered text-2xl text-black cursor-pointer"></i>
        </div>
      </div>

      {/* Main Content */}
      <Landing />
      <Marque />
      <ShowCase />
      <ShowCase2 />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Wrapper;
