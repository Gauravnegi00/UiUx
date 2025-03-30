import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import Footer from "./Footer";
import Marque from "./Marque";
import ShowCase from "./ShowCase";
import ShowCase2 from "./ShowCase2";
import Portfolio from "./Portfolio";
import Services from "./Services";
import DataCompo from "./DataCompo";
import LatestCases from "./LatestCases";

function Wrapper() {
  const [scrolled, setScrolled] = useState(false);
  const [overlayOn, setOverlay] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log("ScrollY:", window.scrollY); // Debugging
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
  
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Sticky Header */}
      <div className="fixed top-1 right-[50px] w-[350px] h-[80px] flex justify-between pr-5 items-center z-50 gap-10 transition-all duration-300">
        <div
          className={`w-[50%] flex rounded-full py-3 px-3 text-lg hover:cursor-pointer
            hover:bg-blue-600 hover:text-white hover:font-bold  transition-all duration-300 ${
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
      <Services />
      <ShowCase />
      <ShowCase2 />
      <DataCompo />
      <LatestCases />
      <Footer />
    </div>
  );
}

export default Wrapper;
